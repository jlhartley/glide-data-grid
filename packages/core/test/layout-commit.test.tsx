import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useEventListener, useStateWithReactiveInput } from "../src/common/utils.js";
import { useInitialScrollOffset } from "../src/data-editor/use-initial-scroll-offset.js";
afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});
it("child layout events see the latest committed handler", () => {
    const a = vi.fn(),
        b = vi.fn();
    function Child({ tick }: { tick: number }) {
        React.useLayoutEffect(() => {
            if (tick > 0) window.dispatchEvent(new MouseEvent("click"));
        }, [tick]);
        return null;
    }
    function Parent({ handler, tick }: { handler: () => void; tick: number }) {
        useEventListener("click", handler, window, false);
        return <Child tick={tick} />;
    }
    const { rerender } = render(<Parent handler={a} tick={0} />);
    rerender(<Parent handler={b} tick={1} />);
    expect(a).not.toHaveBeenCalled();
    expect(b).toHaveBeenCalledOnce();
});

it("a child layout viewport measurement takes precedence over the offset command", () => {
    let last: any;
    const actual = { x: 0, y: 99, width: 10, height: 10 };
    function Child({ y, setRegion }: { y: number; setRegion: React.Dispatch<React.SetStateAction<any>> }) {
        React.useLayoutEffect(() => setRegion({ ...actual, y: y === 0 ? 99 : 88 }), [y, setRegion]);
        return null;
    }
    function Parent({ y }: { y: number }) {
        const value = useInitialScrollOffset(undefined, y, 20, () => {});
        last = value.visibleRegion;
        return <Child y={y} setRegion={value.setVisibleRegion} />;
    }
    const { rerender } = render(<Parent y={0} />);
    expect(last.y).toBe(99);
    rerender(<Parent y={20} />);
    expect(last.y).toBe(88);
});

it("reactive-input child layout updates use the newly committed input", () => {
    let last = -1;
    function Child({ input, setValue }: { input: number; setValue: React.Dispatch<React.SetStateAction<number>> }) {
        React.useLayoutEffect(() => {
            if (input > 0) setValue(previous => previous + 1);
        }, [input, setValue]);
        return null;
    }
    function Parent({ input }: { input: number }) {
        const [value, setValue] = useStateWithReactiveInput(input);
        last = value;
        return <Child input={input} setValue={setValue} />;
    }
    const { rerender } = render(<Parent input={0} />);
    rerender(<Parent input={10} />);
    expect(last).toBe(11);
});
