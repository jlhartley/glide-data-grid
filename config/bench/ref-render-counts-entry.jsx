import * as React from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { DataEditorAll as DataEditor } from "CORE/data-editor-all.js";
import { InfiniteScroller } from "CORE/internal/scrolling-data-grid/infinite-scroller.js";
import Overlay from "CORE/internal/data-grid-overlay-editor/data-grid-overlay-editor.js";
import { getDataEditorTheme as getDefaultTheme } from "CORE/common/styles.js";
import { useInitialScrollOffset } from "CORE/data-editor/use-initial-scroll-offset.js";
import { useKeybindingsWithDefaults } from "CORE/data-editor/data-editor-keybindings.js";
import { useStateWithReactiveInput, useEventListener } from "CORE/common/utils.js";
import { useAnimationQueue } from "CORE/internal/data-grid/use-animation-queue.js";
function run(mode) {
    const target = document.createElement("div");
    document.body.append(target);
    const portal = document.createElement("div");
    portal.id = "portal";
    document.body.append(portal);
    const custom = document.createElement("div");
    document.body.append(custom);
    const ref = { current: custom };
    const errors = [];
    const root = createRoot(target, { onUncaughtError: error => errors.push(error) });
    const columns = [
        { title: "A", width: 100 },
        { title: "B", width: 100 },
    ];
    const content = { kind: "text", allowOverlay: true, data: "x", displayData: "x" };
    let portalTargetCorrect = true;
    let setter;
    let current;
    const handler = () => {};
    const getCellContent = () => content;
    const base = { columns, rows: 1e3, getCellContent, width: 800, height: 600 };
    function Harness({ tick = 0 }) {
        globalThis.__counts.Harness = (globalThis.__counts.Harness ?? 0) + 1;
        if (mode.startsWith("reactive-")) {
            const [value, setValue, reset] = useStateWithReactiveInput(mode === "reactive-change" ? tick : 0);
            setter = setValue;
            current = { value, reset };
            return null;
        }
        if (mode.startsWith("key-")) {
            useKeybindingsWithDefaults(
                mode === "key-default" ? void 0 : { search: mode === "key-change" ? tick % 2 === 0 : true }
            );
            return null;
        }
        if (mode.startsWith("listener")) {
            for (let i = 0; i < 15; i++)
                useEventListener("click", mode === "listener-stable" ? handler : () => {}, window, false);
            return null;
        }
        if (mode.startsWith("animation")) {
            useAnimationQueue(mode === "animation-stable" ? handler : () => {});
            return null;
        }
        if (mode.startsWith("offset-") || mode === "observed-scroll") {
            const vr = React.useRef({ x: 0, y: 0, width: 1, height: 1 });
            const y =
                mode === "offset-y" || mode === "offset-clamped"
                    ? tick * 100
                    : mode === "offset-return"
                      ? (tick % 2) * 20
                      : mode === "offset-row-height"
                        ? 75
                        : 0;
            const args = [mode === "offset-x" ? tick * 20 : 0, y, mode === "offset-row-height" ? 20 + (tick % 2) : 20];
            if (BASE) args.push(vr);
            args.push(handler);
            current = useInitialScrollOffset(...args);
            setter = current.setVisibleRegion;
            if (BASE) vr.current = current.visibleRegion;
            React.useLayoutEffect(() => {
                if (mode !== "offset-clamped") return;
                const node = document.createElement("div");
                let top = 0;
                Object.defineProperty(node, "scrollTop", {
                    get: () => top,
                    set: value => {
                        top = Math.min(value, 50);
                    },
                });
                current.scrollRef.current = node;
                setter({ x: 0, y: 0, width: 10, height: 20 });
            }, []);
            return null;
        }
        if (mode.startsWith("scroller"))
            return (
                <InfiniteScroller
                    clientHeight={600}
                    scrollHeight={32e3}
                    scrollWidth={1e3}
                    draggable={false}
                    update={handler}
                    kineticScrollPerfHack={mode === "scroller-kinetic"}
                    scrollRef={ref}
                >
                    {null}
                </InfiniteScroller>
            );
        if (mode.startsWith("portal"))
            return (
                <Overlay
                    target={{ x: 0, y: 0, width: 100, height: 30 }}
                    cell={[0, 0]}
                    content={content}
                    id="overlay"
                    theme={getDefaultTheme()}
                    forceEditMode={true}
                    highlight={false}
                    activation={{ inputType: "keyboard", key: "Enter" }}
                    onFinishEditing={handler}
                    getCellRenderer={() => void 0}
                    provideEditor={() => () => <input defaultValue="x" />}
                    portalElementRef={mode === "portal-default" ? void 0 : ref}
                />
            );
        return (
            <DataEditor
                {...base}
                scrollOffsetY={mode === "grid-offset" ? tick * 20 : void 0}
                keybindings={mode === "grid-keybindings" ? { search: tick % 2 === 0 } : void 0}
            />
        );
    }
    globalThis.__counts = {};
    globalThis.__benchSize = mode === "scroller-zero" ? [0, 0] : [800, 600];
    flushSync(() => root.render(<Harness />));
    if (errors.length) throw errors[0];
    const mount = { ...globalThis.__counts };
    globalThis.__counts = {};
    for (let i = 1; i <= 10; i++) {
        if (mode === "scroller-resize") globalThis.__benchSize = [800 + i, 600 + i];
        if (mode === "scroller-zero") globalThis.__benchSize = [800, 600];
        if (mode === "observed-scroll" || mode === "reactive-update")
            flushSync(() => setter(mode === "observed-scroll" ? { x: 0, y: i, width: 10, height: 20 } : i));
        else if (mode === "portal-replace") {
            ref.current = i % 2 ? portal : custom;
            flushSync(() => root.render(<Harness tick={i} />));
            portalTargetCorrect &&= ref.current.querySelector("input") !== null;
        } else flushSync(() => root.render(<Harness tick={i} />));
    }
    if (errors.length) throw errors[0];
    const updates = { ...globalThis.__counts };
    flushSync(() => root.unmount());
    target.remove();
    portal.remove();
    custom.remove();
    return { mode, mount, updates, portalTargetCorrect };
}
export { run };
