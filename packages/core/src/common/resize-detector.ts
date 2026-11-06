import { useCallback, useState, useRef, type RefCallback } from "react";
interface ReactResizeDetectorDimensions {
    height?: number;
    width?: number;
}

export function useResizeDetector<T extends HTMLElement = HTMLElement>(
    initialSize?: readonly [width: number, height: number]
): UseResizeDetectorReturn<T> {
    const [size, setSize] = useState<ReactResizeDetectorDimensions>({
        width: initialSize?.[0],
        height: initialSize?.[1],
    });
    const observerRef = useRef<ResizeObserver | undefined>(undefined);
    const elementRef = useRef<T | null>(null);
    const ref = useCallback((element: T | null) => {
        observerRef.current?.disconnect();
        observerRef.current = undefined;
        elementRef.current = element;
        if (element === null) return;
        const observer = new window.ResizeObserver(entries => {
            if (observerRef.current !== observer || elementRef.current !== element) return;
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setSize(previous =>
                    previous.width === width && previous.height === height ? previous : { width, height }
                );
            }
        });
        observerRef.current = observer;
        observer.observe(element);
    }, []);
    return { ref, ...size };
}

export interface UseResizeDetectorReturn<T> extends ReactResizeDetectorDimensions {
    ref: RefCallback<T>;
}
