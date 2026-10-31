import { renderHook, cleanup, act } from "@testing-library/react";
import { useLayoutEffect } from "react";
import { useStateWithReactiveInput } from "../src/common/utils.js";
import { expect, describe, test, afterEach, vi } from "vitest";

function renderStateHook(initialValue: number) {
    const onCommit = vi.fn();
    const hook = renderHook(
        ({ initialValue }) => {
            const state = useStateWithReactiveInput(initialValue);
            // Count committed renders, not React's speculative render attempts.
            useLayoutEffect(onCommit);
            return state;
        },
        { initialProps: { initialValue } }
    );
    return { ...hook, onCommit };
}

describe("useStateWithReactiveInput", () => {
    afterEach(async () => {
        await cleanup();
    });

    test("initial state", () => {
        const { result } = renderHook(() => useStateWithReactiveInput(20));
        expect(result.current[0]).toBe(20);
    });

    test("set state", () => {
        const { result } = renderHook(() => useStateWithReactiveInput(20));

        act(() => {
            result.current[1](30);
        });

        expect(result.current[0]).toBe(30);
    });

    test("set state then render with new initial", () => {
        const { result, rerender } = renderHook(({ initialValue }) => useStateWithReactiveInput(initialValue), {
            initialProps: { initialValue: 20 },
        });

        act(() => {
            result.current[1](30);
        });

        rerender({ initialValue: 50 });

        expect(result.current[0]).toBe(50);
    });

    test("set state then render with new initial then set state", () => {
        const { result, rerender } = renderHook(({ initialValue }) => useStateWithReactiveInput(initialValue), {
            initialProps: { initialValue: 20 },
        });

        act(() => {
            result.current[1](30);
        });

        rerender({ initialValue: 50 });

        act(() => {
            result.current[1](30);
        });

        expect(result.current[0]).toBe(30);
    });

    test("set state then render with new initial then set state should get re-render value", () => {
        const { result, rerender } = renderHook(({ initialValue }) => useStateWithReactiveInput(initialValue), {
            initialProps: { initialValue: 20 },
        });

        act(() => {
            result.current[1](30);
        });

        rerender({ initialValue: 50 });

        act(() => {
            result.current[1](pv => {
                expect(pv).toBe(50);
                return 30;
            });
        });

        expect(result.current[0]).toBe(30);
    });

    test("set state with identity does not re-render", () => {
        const { result, onCommit } = renderStateHook(20);

        expect(onCommit).toHaveBeenCalledTimes(1);

        act(() => {
            result.current[1](x => x);
        });

        expect(onCommit).toHaveBeenCalledTimes(1);
    });

    test("set state with increment re-render", () => {
        const { result, onCommit } = renderStateHook(20);

        expect(onCommit).toHaveBeenCalledTimes(1);

        act(() => {
            result.current[1](x => x + 1);
        });

        expect(onCommit).toHaveBeenCalledTimes(2);
    });

    test("set state with identity does not re-render after state change", () => {
        const { result, rerender, onCommit } = renderStateHook(20);

        expect(onCommit).toHaveBeenCalledTimes(1);

        rerender({ initialValue: 50 });

        expect(result.current[0]).toBe(50);

        expect(onCommit).toHaveBeenCalledTimes(2);

        act(() => {
            result.current[1](x => x);
        });

        expect(result.current[0]).toBe(50);
        expect(onCommit).toHaveBeenCalledTimes(2);
    });
});

test("reactive inputs change in one render and retain stable update callbacks", () => {
    let renders = 0;
    const { result, rerender } = renderHook(
        value => {
            renders++;
            return useStateWithReactiveInput(value);
        },
        { initialProps: 0 }
    );
    const setter = result.current[1];
    const reset = result.current[2];
    for (const value of [10, 20, 0, 0]) {
        const before = renders;
        rerender(value);
        expect(renders - before).toBe(1);
        expect(result.current[0]).toBe(value);
        expect(result.current[1]).toBe(setter);
        expect(result.current[2]).toBe(reset);
    }
});
