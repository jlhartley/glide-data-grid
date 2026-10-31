import * as React from "react";

/**
 * Library bridge for stable callbacks that can run from descendant layout effects.
 * Publish only committed values, before any layout effect or ref attachment can
 * consume them. This insertion effect never reads the DOM or schedules state.
 */
export function useCommittedRef<T>(value: T): React.RefObject<T> {
    const ref = React.useRef(value);
    React.useInsertionEffect(() => {
        ref.current = value;
    }, [value]);
    return ref;
}
