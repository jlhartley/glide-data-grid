import * as React from "react";
import type { VisibleRegion } from "./visible-region.js";
import type { DataEditorCoreProps } from "../index.js";

// shamelessly stolen and modified from: https://github.com/theKashey/use-callback-ref
// MIT License https://github.com/theKashey/use-callback-ref/tree/master?tab=MIT-1-ov-file#readme
function useCallbackRef<T>(
    initialValue: T | null,
    callback: (newValue: T | null, lastValue: T | null) => void
): React.RefObject<T | null> {
    const [ref] = React.useState(() => ({
        value: initialValue,
        callback,
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                const last = ref.value;

                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }));
    React.useLayoutEffect(() => {
        ref.callback = callback;
    }, [callback, ref]);

    return ref.facade;
}

export function useInitialScrollOffset(
    scrollOffsetX: number | undefined,
    scrollOffsetY: number | undefined,
    rowHeight: NonNullable<DataEditorCoreProps["rowHeight"]>,
    onDidScroll: () => void
) {
    const y = scrollOffsetY !== undefined && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0;
    const ty = scrollOffsetY !== undefined && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0;
    const [snapshot, setSnapshot] = React.useState(() => {
        const region: VisibleRegion = { x: 0, y, width: 1, height: 1, ty };
        return { y, ty, region, observed: region };
    });
    if (!Object.is(snapshot.y, y) || !Object.is(snapshot.ty, ty)) {
        // An offset change takes effect in this render, retaining the measured viewport.
        setSnapshot({
            ...snapshot,
            y,
            ty,
            region: { x: snapshot.region.x, y, width: snapshot.region.width, height: snapshot.region.height, ty },
        });
    }
    const visibleRegion = snapshot.region;
    const setVisibleRegion = React.useCallback<React.Dispatch<React.SetStateAction<VisibleRegion>>>(next => {
        setSnapshot(previous => {
            const region = typeof next === "function" ? next(previous.region) : next;
            if (region === previous.region) return previous;
            return { ...previous, region, observed: region };
        });
    }, []);
    const empty = React.useCallback(() => {
        // The browser clamped the requested offset: use the last observed viewport
        // until its scroll notification supplies the actual position.
        setSnapshot(previous => ({ ...previous, region: previous.observed }));
    }, []);

    const onDidScrollRef = React.useRef(onDidScroll);
    React.useLayoutEffect(() => {
        onDidScrollRef.current = onDidScroll;
    }, [onDidScroll]);

    const scrollRef = useCallbackRef<HTMLDivElement | null>(null, newVal => {
        if (newVal !== null && scrollOffsetY !== undefined) {
            newVal.scrollTop = scrollOffsetY;
        } else if (newVal !== null && scrollOffsetX !== undefined) {
            newVal.scrollLeft = scrollOffsetX;
        }
    });

    const vScrollReady = (visibleRegion.height ?? 1) > 1;
    React.useLayoutEffect(() => {
        if (scrollOffsetY !== undefined && scrollRef.current !== null && vScrollReady) {
            if (scrollRef.current.scrollTop === scrollOffsetY) return;
            scrollRef.current.scrollTop = scrollOffsetY;
            if (scrollRef.current.scrollTop !== scrollOffsetY) {
                empty();
            }
            onDidScrollRef.current();
        }
    }, [scrollOffsetY, vScrollReady, empty, scrollRef]);

    const hScrollReady = (visibleRegion.width ?? 1) > 1;
    React.useLayoutEffect(() => {
        if (scrollOffsetX !== undefined && scrollRef.current !== null && hScrollReady) {
            if (scrollRef.current.scrollLeft === scrollOffsetX) return;
            scrollRef.current.scrollLeft = scrollOffsetX;
            if (scrollRef.current.scrollLeft !== scrollOffsetX) {
                empty();
            }
            onDidScrollRef.current();
        }
    }, [scrollOffsetX, hScrollReady, empty, scrollRef]);

    return {
        visibleRegion,
        setVisibleRegion,
        scrollRef,
    };
}
