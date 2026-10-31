import * as React from "react";
import { useCommittedRef } from "../common/use-committed-ref.js";
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
    React.useInsertionEffect(() => {
        ref.callback = callback;
    }, [callback, ref]);

    return ref.facade;
}

function applyOffset(region: VisibleRegion, input: { y: number; ty: number }): VisibleRegion {
    return { x: region.x, y: input.y, width: region.width, height: region.height, ty: input.ty };
}

export function useInitialScrollOffset(
    scrollOffsetX: number | undefined,
    scrollOffsetY: number | undefined,
    rowHeight: NonNullable<DataEditorCoreProps["rowHeight"]>,
    onDidScroll: () => void
) {
    const y = scrollOffsetY !== undefined && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0;
    const ty = scrollOffsetY !== undefined && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0;
    // This memo represents a new offset command, including A -> B -> A changes.
    const input = React.useMemo(() => ({ y, ty }), [y, ty]);
    const [snapshot, setSnapshot] = React.useState(() => {
        const region: VisibleRegion = { x: 0, y, width: 1, height: 1, ty };
        return { input, region, observed: region };
    });
    const visibleRegion = React.useMemo(
        () => (snapshot.input === input ? snapshot.region : applyOffset(snapshot.region, input)),
        [snapshot, input]
    );
    const committedInput = useCommittedRef(input);
    const setVisibleRegion = React.useCallback<React.Dispatch<React.SetStateAction<VisibleRegion>>>(next => {
        // Capture the committed command in the event handler, outside the updater.
        const command = committedInput.current;
        setSnapshot(previous => {
            const current = previous.input === command ? previous.region : applyOffset(previous.region, command);
            const region = typeof next === "function" ? next(current) : next;
            if (region === current) return previous;
            return { input: command, region, observed: region };
        });
    }, [committedInput]);
    const empty = React.useCallback(() => {
        const command = committedInput.current;
        setSnapshot(previous => ({ ...previous, input: command, region: previous.observed }));
    }, [committedInput]);

    const onDidScrollRef = useCommittedRef(onDidScroll);

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
    }, [scrollOffsetY, vScrollReady, empty, scrollRef, onDidScrollRef]);

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
    }, [scrollOffsetX, hScrollReady, empty, scrollRef, onDidScrollRef]);

    return {
        visibleRegion,
        setVisibleRegion,
        scrollRef,
    };
}
