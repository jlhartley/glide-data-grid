import * as React from "react";
import { act, cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { useStayOnScreen } from "../src/internal/data-grid-overlay-editor/use-stay-on-screen.js";

const observers: {
    callback: IntersectionObserverCallback;
    observe: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
}[] = [];
const frames = new Map<number, FrameRequestCallback>();
let nextFrame = 0;
beforeEach(() => {
    observers.length = 0;
    frames.clear();
    nextFrame = 0;
    vi.stubGlobal(
        "IntersectionObserver",
        vi.fn((callback: IntersectionObserverCallback) => {
            const observer = { callback, observe: vi.fn(), disconnect: vi.fn() };
            observers.push(observer);
            return observer;
        })
    );
    vi.stubGlobal(
        "requestAnimationFrame",
        vi.fn((callback: FrameRequestCallback) => {
            frames.set(++nextFrame, callback);
            return nextFrame;
        })
    );
    vi.stubGlobal(
        "cancelAnimationFrame",
        vi.fn((id: number) => frames.delete(id))
    );
});
afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
});
function notify(index: number, isIntersecting: boolean) {
    act(() => observers[index].callback([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver));
}
function frame() {
    const [id, callback] = frames.entries().next().value!;
    frames.delete(id);
    act(() => callback(0));
}

it("attaches and retargets observers without a corrective component render", () => {
    let renders = 0;
    function Harness({ version }: { version: number }) {
        renders++;
        const { ref, style } = useStayOnScreen();
        return <div key={version} ref={ref} style={style} />;
    }
    const { rerender, unmount } = render(<Harness version={0} />);
    expect(renders).toBe(1);
    expect(observers[0].observe).toHaveBeenCalledOnce();
    notify(0, false);
    expect(renders).toBe(1);
    expect(frames.size).toBe(1);
    rerender(<Harness version={1} />);
    expect(renders).toBe(2);
    expect(observers[0].disconnect).toHaveBeenCalledOnce();
    expect(frames.size).toBe(0);
    notify(0, false);
    expect(frames.size).toBe(0);
    expect(observers[1].observe).toHaveBeenCalledOnce();
    unmount();
    expect(observers[1].disconnect).toHaveBeenCalledOnce();
});

it("corrects horizontal position in frames and stops when visible again", () => {
    function Harness() {
        const { ref, style } = useStayOnScreen();
        return <div data-testid="editor" ref={ref} style={style} />;
    }
    const { getByTestId, unmount } = render(<Harness />);
    const element = getByTestId("editor");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({ right: window.innerWidth + 100 } as DOMRect);
    notify(0, false);
    notify(0, false);
    expect(frames.size).toBe(1);
    frame();
    expect(element.style.transform).toBe("translateX(-110px)");
    expect(frames.size).toBe(1);
    notify(0, true);
    expect(frames.size).toBe(0);
    notify(0, false);
    expect(frames.size).toBe(1);
    unmount();
    expect(frames.size).toBe(0);
});

it("disconnects every observer during Strict Mode replay and unmount", () => {
    function Harness() {
        const { ref } = useStayOnScreen();
        return <div ref={ref} />;
    }
    const { unmount } = render(
        <React.StrictMode>
            <Harness />
        </React.StrictMode>
    );
    if (observers.length > 1) {
        notify(0, false);
        expect(frames.size).toBe(0);
    }
    unmount();
    expect(observers.length).toBeGreaterThan(0);
    for (const observer of observers) expect(observer.disconnect).toHaveBeenCalledOnce();
});
