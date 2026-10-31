import * as React from "react";
import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useDeepMemo, useEventListener, useStateWithReactiveInput } from "../src/common/utils.js";
import { useAnimationQueue } from "../src/internal/data-grid/use-animation-queue.js";
import { CellSet } from "../src/internal/data-grid/cell-set.js";

const pending = new Promise<void>(() => {});
const wrapper = ({ children }: React.PropsWithChildren) => <React.Suspense fallback={null}>{children}</React.Suspense>;

afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
});

describe("committed hook values", () => {
    it("keeps a listener attached and preserves this while publishing only committed handlers", () => {
        const element = document.createElement("div");
        const add = vi.spyOn(element, "addEventListener");
        const remove = vi.spyOn(element, "removeEventListener");
        const first = vi.fn();
        const next = vi.fn();
        const abandoned = vi.fn();
        const { rerender, unmount } = renderHook(({ handler, suspend }) => {
            useEventListener("click", handler, element, false);
            if (suspend) throw pending;
        }, { initialProps: { handler: first, suspend: false }, wrapper });
        rerender({ handler: next, suspend: false });
        element.click();
        expect(next).toHaveBeenCalledOnce();
        expect(next.mock.instances[0]).toBe(element);
        rerender({ handler: abandoned, suspend: true });
        element.click();
        expect(next).toHaveBeenCalledTimes(2);
        expect(abandoned).not.toHaveBeenCalled();
        expect(add).toHaveBeenCalledOnce();
        unmount();
        expect(remove).toHaveBeenCalledWith("click", add.mock.calls[0][1], { capture: false });
    });

    it("keeps the enqueue identity and draws deduplicated cells with the latest committed callback", () => {
        vi.useFakeTimers();
        const first = vi.fn();
        const next = vi.fn();
        const abandoned = vi.fn();
        const { result, rerender } = renderHook(({ draw, suspend }) => {
            const enqueue = useAnimationQueue(draw);
            if (suspend) throw pending;
            return enqueue;
        }, { initialProps: { draw: first, suspend: false }, wrapper });
        const enqueue = result.current;
        enqueue([1, 2]);
        enqueue([1, 2]);
        rerender({ draw: next, suspend: false });
        expect(result.current).toBe(enqueue);
        rerender({ draw: abandoned, suspend: true });
        vi.advanceTimersByTime(16);
        expect(first).not.toHaveBeenCalled();
        expect(abandoned).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith(new CellSet([[1, 2]]));
        expect(next).toHaveBeenCalledOnce();
    });

    it("retains deep memo identity across an abandoned render", () => {
        const initial = { a: 1 };
        const { result, rerender } = renderHook(({ value, suspend }) => {
            const memo = useDeepMemo(value);
            if (suspend) throw pending;
            return memo;
        }, { initialProps: { value: initial, suspend: false }, wrapper });
        rerender({ value: { a: 2 }, suspend: true });
        rerender({ value: { a: 1 }, suspend: false });
        expect(result.current).toBe(initial);
    });

    it("overrides immediately, supports chained updaters and restores the last explicit value on reset", () => {
        const { result, rerender } = renderHook(value => useStateWithReactiveInput(value), { initialProps: 1 });
        const setValue = result.current[1];
        const reset = result.current[2];
        act(() => setValue(3));
        rerender(10);
        expect(result.current[0]).toBe(10);
        expect(result.current[1]).toBe(setValue);
        expect(result.current[2]).toBe(reset);
        act(() => reset());
        expect(result.current[0]).toBe(3);
        rerender(20);
        act(() => {
            setValue(value => value + 1);
            setValue(value => value + 1);
        });
        expect(result.current[0]).toBe(22);
        rerender(30);
        act(() => setValue(22));
        expect(result.current[0]).toBe(22);
    });

    it("does not leak a suspended reactive input into later updates", () => {
        const { result, rerender } = renderHook(({ value, suspend }) => {
            const state = useStateWithReactiveInput(value);
            if (suspend) throw pending;
            return state;
        }, { initialProps: { value: 1, suspend: false }, wrapper });
        act(() => result.current[1](3));
        rerender({ value: 10, suspend: true });
        rerender({ value: 1, suspend: false });
        expect(result.current[0]).toBe(3);
        act(() => result.current[1](value => value + 1));
        expect(result.current[0]).toBe(4);
    });
});
