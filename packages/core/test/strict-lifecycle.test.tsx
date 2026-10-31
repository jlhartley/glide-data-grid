import * as React from "react";
import { act, cleanup, render, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { DataEditorAll } from "../src/data-editor-all.js";
import { GridCellKind } from "../src/index.js";
import { useDebouncedMemo } from "../src/common/utils.js";
afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});
it("debounced memo continues updating after root Strict Mode replay", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(value => useDebouncedMemo(() => value, [value], 10), {
        initialProps: "before",
        reactStrictMode: true,
    });
    rerender("after");
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe("after");
});

it("root Strict Mode selection requests always start with a live controller", () => {
    vi.stubGlobal(
        "ResizeObserver",
        class {
            observe() {}
            unobserve() {}
            disconnect() {}
        }
    );
    const atInvocation: boolean[] = [];
    const signals: AbortSignal[] = [];
    const text = { kind: GridCellKind.Text, allowOverlay: false, data: "x", displayData: "x" } as const;
    const { unmount } = render(
        <DataEditorAll
            columns={[{ id: "a", title: "A" }]}
            rows={1}
            getCellContent={() => text}
            getCellsForSelection={(_region, signal) => {
                atInvocation.push(signal.aborted);
                signals.push(signal);
                return [[text]];
            }}
            width={500}
            height={300}
            initialSize={[500, 300]}
        />,
        { reactStrictMode: true }
    );
    expect(atInvocation.length).toBeGreaterThanOrEqual(2);
    expect(atInvocation.every(aborted => !aborted)).toBe(true);
    expect(signals[0].aborted).toBe(true);
    expect(signals.at(-1)!.aborted).toBe(false);
    unmount();
    expect(signals.every(signal => signal.aborted)).toBe(true);
});

it("debounced memo keeps caller dependencies and cancels obsolete timers on delay change and unmount", () => {
    vi.useFakeTimers();
    let value = 0;
    const factory = vi.fn(() => value);
    const { result, rerender, unmount } = renderHook(({ input, delay }) => useDebouncedMemo(factory, [input], delay), {
        initialProps: { input: 0, delay: 10 },
        reactStrictMode: true,
    });
    act(() => vi.advanceTimersByTime(10));
    const initialCalls = factory.mock.calls.length;
    value = 1;
    rerender({ input: 0, delay: 10 });
    act(() => vi.advanceTimersByTime(20));
    expect(factory).toHaveBeenCalledTimes(initialCalls);
    rerender({ input: 1, delay: 10 });
    act(() => vi.advanceTimersByTime(5));
    expect(result.current).toBe(0);
    rerender({ input: 1, delay: 30 });
    act(() => vi.advanceTimersByTime(25));
    expect(result.current).toBe(0);
    act(() => vi.advanceTimersByTime(5));
    expect(result.current).toBe(1);
    value = 2;
    rerender({ input: 2, delay: 30 });
    const beforeUnmount = factory.mock.calls.length;
    unmount();
    act(() => vi.runAllTimers());
    expect(factory).toHaveBeenCalledTimes(beforeUnmount);
});
