import { renderHook, act } from "@testing-library/react";
import useKineticScroll from "../src/internal/scrolling-data-grid/use-kinetic-scroll.js";
import { vi, expect, describe, it, afterEach, beforeEach } from "vitest";
import { fireEvent } from "@testing-library/react";

describe("useKineticScroll", () => {
    let targetScroller: { current: HTMLDivElement };
    let callback: () => void;

    beforeEach(() => {
        targetScroller = { current: document.createElement("div") };
        callback = vi.fn();

        vi.spyOn(targetScroller.current, "addEventListener");
        vi.spyOn(targetScroller.current, "removeEventListener");
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.clearAllMocks();
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
    });

    it("registers and unregisters event listeners based on isEnabled", () => {
        const { rerender } = renderHook(({ isEnabled }) => useKineticScroll(isEnabled, callback, targetScroller), {
            initialProps: { isEnabled: false },
        });

        expect(targetScroller.current.addEventListener).not.toHaveBeenCalled();
        expect(targetScroller.current.removeEventListener).not.toHaveBeenCalled();

        rerender({ isEnabled: true });

        expect(targetScroller.current.addEventListener).toHaveBeenCalledTimes(2);
        expect(targetScroller.current.removeEventListener).not.toHaveBeenCalled();

        rerender({ isEnabled: false });

        expect(targetScroller.current.removeEventListener).toHaveBeenCalledTimes(2);
    });

    it("handles scroll events and triggers callback", () => {
        renderHook(() => useKineticScroll(true, callback, targetScroller));

        act(() => {
            targetScroller.current.dispatchEvent(new Event("touchstart"));
            vi.advanceTimersByTime(1000);
            fireEvent.touchEnd(targetScroller.current, {
                touches: [],
            });
            vi.advanceTimersByTime(1000 / 120);
        });

        expect(callback).toHaveBeenCalled();
    });
});

it("keeps momentum subscribed across callback changes and cancels it on target replacement", () => {
    vi.useFakeTimers();
    const first = document.createElement("div");
    const second = document.createElement("div");
    const remove = vi.spyOn(first, "removeEventListener");
    const oldCallback = vi.fn();
    const nextCallback = vi.fn();
    const targetRef = { current: first };
    const { rerender, unmount } = renderHook(
        ({ target, onScroll }) => {
            targetRef.current = target;
            useKineticScroll(true, onScroll, targetRef);
        },
        {
            initialProps: { target: first, onScroll: oldCallback },
        }
    );
    fireEvent.touchStart(first);
    fireEvent.touchEnd(first, { touches: [] });
    rerender({ target: first, onScroll: nextCallback });
    expect(remove).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000 / 120);
    expect(oldCallback).not.toHaveBeenCalled();
    expect(nextCallback).toHaveBeenCalledOnce();
    rerender({ target: second, onScroll: nextCallback });
    expect(remove).toHaveBeenCalledTimes(2);
    vi.advanceTimersByTime(100);
    expect(nextCallback).toHaveBeenCalledOnce();
    unmount();
    vi.useRealTimers();
    vi.restoreAllMocks();
});
