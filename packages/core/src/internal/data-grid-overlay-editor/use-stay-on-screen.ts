import * as React from "react";

interface StayOnScreen {
    ref: React.RefCallback<HTMLElement | null>;
    style: React.CSSProperties;
}

export function useStayOnScreen(): StayOnScreen {
    const [xOffset, setXOffset] = React.useState(0);
    const elementRef = React.useRef<HTMLElement | null>(null);
    const observerRef = React.useRef<IntersectionObserver | undefined>(undefined);
    const frameRef = React.useRef<number | undefined>(undefined);

    // Attaching the element is a subscription change, not rendered state.
    // Observe it directly in the commit callback instead of rerendering first.
    const ref = React.useCallback((element: HTMLElement | null) => {
        observerRef.current?.disconnect();
        observerRef.current = undefined;
        if (frameRef.current !== undefined) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = undefined;
        }
        elementRef.current = element;
        if (element === null || !("IntersectionObserver" in window)) return;

        const step = () => {
            if (elementRef.current !== element) return;
            const { right } = element.getBoundingClientRect();
            setXOffset(previous => Math.min(previous + window.innerWidth - right - 10, 0));
            frameRef.current = requestAnimationFrame(step);
        };
        const observer = new IntersectionObserver(
            entries => {
                if (entries.length === 0 || elementRef.current !== element || observerRef.current !== observer) return;
                if (entries[0].isIntersecting) {
                    if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
                    frameRef.current = undefined;
                    return;
                }
                if (frameRef.current !== undefined) return;
                frameRef.current = requestAnimationFrame(step);
            },
            { threshold: 1 }
        );
        observerRef.current = observer;
        observer.observe(element);
    }, []);

    const style = React.useMemo(() => ({ transform: `translateX(${xOffset}px)` }), [xOffset]);
    return { ref, style };
}
