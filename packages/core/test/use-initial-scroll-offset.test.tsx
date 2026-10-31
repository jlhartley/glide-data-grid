import * as React from "react";
import { act, cleanup, render, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useInitialScrollOffset } from "../src/data-editor/use-initial-scroll-offset.js";
import type { VisibleRegion } from "../src/data-editor/visible-region.js";

afterEach(cleanup);

const viewport: VisibleRegion = { x: 4, y: 8, width: 9, height: 10, ty: -3 };

describe("initial scroll offsets", () => {
    it("derives row offsets immediately and preserves measured dimensions on prop changes", () => {
        const { result, rerender } = renderHook(
            ({ y, rowHeight }) => useInitialScrollOffset(40, y, rowHeight, () => {}),
            {
                initialProps: { y: 65, rowHeight: 20 },
            }
        );
        expect(result.current.visibleRegion).toEqual({ x: 0, y: 3, width: 1, height: 1, ty: -5 });
        act(() => result.current.setVisibleRegion(viewport));
        rerender({ y: 95, rowHeight: 20 });
        expect(result.current.visibleRegion).toEqual({ x: 4, y: 4, width: 9, height: 10, ty: -15 });
        rerender({ y: 95, rowHeight: 30 });
        expect(result.current.visibleRegion).toEqual({ x: 4, y: 3, width: 9, height: 10, ty: -5 });
    });

    it("keeps user scrolling until an offset actually changes", () => {
        const { result, rerender } = renderHook(({ x }) => useInitialScrollOffset(x, 40, 20, () => {}), {
            initialProps: { x: 0 },
        });
        act(() => result.current.setVisibleRegion(viewport));
        const setter = result.current.setVisibleRegion;
        const scrollRef = result.current.scrollRef;
        rerender({ x: 100 });
        expect(result.current.visibleRegion).toBe(viewport);
        expect(result.current.setVisibleRegion).toBe(setter);
        expect(result.current.scrollRef).toBe(scrollRef);
    });

    it("publishes the current scroll callback before layout work and handles both axes", () => {
        const first = vi.fn();
        const next = vi.fn();
        function Grid({ x, y, onScroll }: { x: number; y: number; onScroll: () => void }) {
            const { scrollRef, setVisibleRegion } = useInitialScrollOffset(x, y, 20, onScroll);
            React.useLayoutEffect(() => setVisibleRegion(viewport), [setVisibleRegion]);
            return <div data-testid="scroll" ref={scrollRef} />;
        }
        const { getByTestId, rerender } = render(<Grid x={40} y={60} onScroll={first} />);
        const node = getByTestId("scroll");
        expect(node.scrollTop).toBe(60);
        expect(node.scrollLeft).toBe(40);
        first.mockClear();
        rerender(<Grid x={80} y={100} onScroll={next} />);
        expect(node.scrollTop).toBe(100);
        expect(node.scrollLeft).toBe(80);
        expect(first).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(2);
    });

    it("restores the last observed region when the browser clamps an offset", () => {
        const { result, rerender } = renderHook(({ y }) => useInitialScrollOffset(undefined, y, 20, () => {}), {
            initialProps: { y: 0 },
        });
        const node = document.createElement("div");
        let top = 0;
        Object.defineProperty(node, "scrollTop", {
            get: () => top,
            set: value => {
                top = Math.min(value, 100);
            },
        });
        act(() => {
            result.current.scrollRef.current = node;
            result.current.setVisibleRegion(viewport);
        });
        rerender({ y: 500 });
        expect(node.scrollTop).toBe(100);
        expect(result.current.visibleRegion).toBe(viewport);
        act(() => result.current.setVisibleRegion({ ...viewport, y: 5, ty: 0 }));
        expect(result.current.visibleRegion.y).toBe(5);
    });
});
