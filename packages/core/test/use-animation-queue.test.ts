import { renderHook, cleanup } from "@testing-library/react";
import { useAnimationQueue } from "../src/internal/data-grid/use-animation-queue.js";
import { vi, expect, describe, it, beforeEach, afterEach } from "vitest";
import { CellSet } from "../src/internal/data-grid/cell-set.js";

// const OG_RAF = window.requestAnimationFrame;
// const OG_CAF = window.cancelAnimationFrame;

describe("use-cell-sizer", () => {
    beforeEach(() => {
        // Mock rAF with setTimeout. Not perfect by any means, but at least it mocks the asynchronicity.
        vi.useFakeTimers();

        // window.requestAnimationFrame = f => {
        //     const timeoutID = setTimeout(() => {
        //         const timestamp = performance.now();
        //         f(timestamp);
        //     }, 0);
        //     return timeoutID as unknown as number;
        // };

        // window.cancelAnimationFrame = (rafID: number) => {
        //     clearTimeout(rafID);
        // };
    });
    afterEach(async () => {
        vi.useRealTimers();

        await cleanup();

        // window.requestAnimationFrame = OG_RAF;
        // window.cancelAnimationFrame = OG_CAF;
    });

    it("Draws when an item is enqueued", async () => {
        const draw = vi.fn();
        const { result } = renderHook(() => useAnimationQueue(draw));

        result.current([1, 2]);
        result.current([2, 3]);
        result.current([3, 4]);

        vi.runAllTimers();

        expect(draw).toHaveBeenCalledWith(
            new CellSet([
                [1, 2],
                [2, 3],
                [3, 4],
            ])
        );
    });
});

it("defers reentrant drawing to the next frame and retains the long-running throttle", () => {
    const frames: FrameRequestCallback[] = [];
    const request = vi.spyOn(window, "requestAnimationFrame").mockImplementation(callback => {
        frames.push(callback);
        return frames.length;
    });
    let enqueue: ReturnType<typeof useAnimationQueue>;
    const draw = vi.fn(() => enqueue([1, 2]));
    const { result, unmount } = renderHook(() => useAnimationQueue(draw));
    enqueue = result.current;
    enqueue([1, 2]);
    expect(draw).not.toHaveBeenCalled();
    for (let i = 0; i < 602; i++) frames.shift()!(i * 16);
    expect(draw).toHaveBeenCalledTimes(602);
    frames.shift()!(603 * 16);
    expect(draw).toHaveBeenCalledTimes(602);
    frames.shift()!(604 * 16);
    expect(draw).toHaveBeenCalledTimes(603);
    unmount();
    request.mockRestore();
});
