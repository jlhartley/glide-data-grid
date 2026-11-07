import { type RefObject, useState } from "react";

export function useMenuPortalTarget(portalElementRef: RefObject<HTMLElement> | undefined) {
    const [target, setTarget] = useState(() =>
        portalElementRef === undefined && typeof document !== "undefined" ? document.getElementById("portal") : null
    );

    // Recheck after each commit because the target can change without a new ref object.
    const attach = (element: HTMLDivElement | null) => {
        if (element === null) return;
        const nextTarget = portalElementRef?.current ?? document.getElementById("portal");
        if (target !== nextTarget) setTarget(nextTarget);
    };

    return [target, attach] as const;
}
