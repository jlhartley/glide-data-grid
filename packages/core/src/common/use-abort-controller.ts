import { useCallback, useEffect, useRef } from "react";

/** Obtain a live controller when starting work, including after Strict Mode replay. */
export function useAbortController() {
    const controller = useRef<AbortController | undefined>(undefined);
    const getController = useCallback(() => {
        if (controller.current === undefined || controller.current.signal.aborted) {
            controller.current = new AbortController();
        }
        return controller.current;
    }, []);
    useEffect(
        () => () => {
            controller.current?.abort();
            controller.current = undefined;
        },
        []
    );
    return getController;
}
