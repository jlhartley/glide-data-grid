import * as React from "react";
import { createRoot } from "react-dom/client";
import { DataEditorAll as DataEditor } from "CORE/data-editor-all.js";
import { GridCellKind } from "CORE/internal/data-grid/data-grid-types.js";
import { useResizeDetector } from "CORE/common/resize-detector.js";
import ClickOutsideContainer from "CORE/internal/click-outside-container/click-outside-container.js";
import { useEventListener, useStateWithReactiveInput } from "CORE/common/utils.js";
import { useInitialScrollOffset } from "CORE/data-editor/use-initial-scroll-offset.js";
import { useMoveableColumns } from "SOURCE/use-movable-columns.ts";

declare const VARIANT: string;
const query = new URLSearchParams(location.search);
const scenario = query.get("case") ?? "grid";
const audit: any = ((window as any).__audit = {
    variant: VARIANT,
    scenario,
    ready: false,
    visible: null,
    clicks: [],
    edits: [],
    moves: [],
    fetches: [],
    errors: [],
});
window.addEventListener("error", event => audit.errors.push(event.message));
window.addEventListener("unhandledrejection", event => audit.errors.push(String(event.reason)));
function useReady() {
    React.useEffect(() => {
        requestAnimationFrame(() => {
            audit.ready = true;
        });
    }, []);
}
function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="click-outside-ignore" {...props}>
            {children}
        </button>
    );
}

function GridApp() {
    useReady();
    const [rows, setRows] = React.useState(() =>
        Array.from({ length: 1000 }, (_, y) => Array.from({ length: 5 }, (_, x) => `R${y}C${x}`))
    );
    const [offset, setOffset] = React.useState<number | undefined>();
    const [height, setHeight] = React.useState(400);
    const [width, setWidth] = React.useState(760);
    const [nonce, setNonce] = React.useState(0);
    const [visible, setVisible] = React.useState<any>();
    const [clicked, setClicked] = React.useState("");
    const [edit, setEdit] = React.useState("");
    const [customTarget, setCustomTarget] = React.useState<HTMLElement>();
    const outer = React.useRef<HTMLDivElement>(null),
        inner = React.useRef<HTMLDivElement>(null);
    const portalRef = React.useRef<HTMLElement | null>(null);
    const fetched = React.useRef(false);
    const [dataReady, setDataReady] = React.useState(scenario !== "strict-fetch");
    const fetching = scenario === "strict-fetch";
    const columns = React.useMemo(
        () =>
            fetching
                ? [{ id: "a", title: "Student" }]
                : Array.from({ length: 5 }, (_, i) => ({ id: String(i), title: `Column ${i}`, width: 150 })),
        [fetching]
    );
    React.useLayoutEffect(() => {
        portalRef.current = document.getElementById("portal-a");
        if (scenario === "event-target") setCustomTarget(outer.current!);
        if (scenario === "event-target-initial") {
            const node = inner.current!;
            for (const type of ["pointerdown", "pointerup", "pointermove", "click"])
                node.addEventListener(type, event => event.stopPropagation());
            setCustomTarget(node);
        }
    }, []);
    const getCellContent = React.useCallback(
        ([x, y]: readonly number[]) =>
            !dataReady
                ? { kind: GridCellKind.Loading, allowOverlay: false }
                : {
                      kind: GridCellKind.Text,
                      allowOverlay: true,
                      data: rows[y]?.[x] ?? "",
                      displayData: rows[y]?.[x] ?? "",
                  },
        [rows, dataReady]
    );
    const onVisible = React.useCallback((r: any) => {
        audit.visible = r;
        setVisible((old: any) =>
            old && ["x", "y", "width", "height", "tx", "ty"].every(k => old[k] === r[k]) ? old : r
        );
    }, []);
    const onClicked = React.useCallback((cell: any) => {
        audit.clicks.push(cell);
        setClicked(cell.join(","));
    }, []);
    const onEdited = React.useCallback(([x, y]: readonly number[], value: any) => {
        audit.edits.push({ x, y, value: value.data });
        setEdit(value.data);
        setRows(old => old.map((r, i) => (i === y ? r.map((v, j) => (j === x ? value.data : v)) : r)));
    }, []);
    const getCells = React.useCallback((r: any, signal: AbortSignal) => {
        const item: any = { abortedAtStart: signal.aborted, status: "started" };
        audit.fetches.push(item);
        return async () => {
            try {
                const response = await fetch(`/cells?height=${r.height}&width=${r.width}`, { signal });
                const result = await response.json();
                item.status = "success";
                fetched.current = true;
                setDataReady(true);
                return result;
            } catch (error: any) {
                item.status = error.name;
                return [];
            }
        };
    }, []);
    const switchBoundary = () => {
        const node = inner.current!;
        for (const type of ["pointerdown", "pointerup", "pointermove", "click"])
            node.addEventListener(type, event => event.stopPropagation());
        setCustomTarget(node);
        audit.boundary = "inner";
    };
    return (
        <>
            <h1>
                {scenario} · {VARIANT}
            </h1>
            <nav>
                <Button onClick={() => setOffset(3200)}>Go to row 100</Button>
                <Button onClick={() => setOffset(1_000_000)}>Go past final row</Button>
                <Button
                    onClick={() => {
                        setOffset(6400);
                        setHeight(320);
                        setWidth(680);
                    }}
                >
                    Scroll and resize
                </Button>
                <Button
                    onClick={() => {
                        setHeight(v => (v === 400 ? 300 : 400));
                        setWidth(v => (v === 760 ? 620 : 760));
                    }}
                >
                    Resize grid
                </Button>
                <Button
                    onClick={() => {
                        portalRef.current = document.getElementById("portal-b");
                        setNonce(v => v + 1);
                        audit.portal = "b";
                    }}
                >
                    Move editor portal
                </Button>
                <Button onClick={switchBoundary}>Use inner event boundary</Button>
                <Button onClick={() => document.getElementById("portal-a")?.remove()}>Remove old portal</Button>
            </nav>
            <div ref={outer} id="boundary-a">
                <div ref={inner} id="boundary-b" style={{ width, height }}>
                    {(scenario !== "event-target-initial" || customTarget !== undefined) && (
                        <DataEditor
                            columns={columns}
                            rows={fetching ? 1 : 1000}
                            rowHeight={32}
                            headerHeight={36}
                            getCellContent={getCellContent as any}
                            onCellClicked={onClicked}
                            onCellEdited={onEdited}
                            onVisibleRegionChanged={onVisible}
                            scrollOffsetY={offset}
                            width={width}
                            height={height}
                            initialSize={[760, 400]}
                            portalElementRef={
                                scenario === "portal" ? (portalRef as React.RefObject<HTMLElement>) : undefined
                            }
                            experimental={
                                scenario.startsWith("event-target") ? { eventTarget: customTarget } : undefined
                            }
                            getCellsForSelection={fetching ? getCells : undefined}
                        />
                    )}
                </div>
            </div>
            <div className="readouts">
                <div>
                    Visible region:{" "}
                    <output id="visible">
                        {visible ? `${visible.x},${visible.y},${visible.width},${visible.height}` : "pending"}
                    </output>
                </div>
                <div>
                    Clicked cell: <output id="clicked">{clicked}</output>
                </div>
                <div>
                    Saved value: <output id="edited">{edit}</output>
                </div>
                <div>
                    Rows loaded: <output id="loaded">{String(dataReady)}</output>
                </div>
                <div>Portal generation: {nonce}</div>
            </div>
        </>
    );
}

function ResizeApp() {
    useReady();
    const { ref, width } = useResizeDetector<HTMLDivElement>();
    const [right, setRight] = React.useState(false);
    return (
        <>
            <h1>Resize observer target · {VARIANT}</h1>
            <Button onClick={() => setRight(true)}>Measure right panel</Button>
            <Button
                onClick={() => {
                    document.getElementById("left-panel")!.style.width = "310px";
                }}
            >
                Widen active panel
            </Button>
            <p>
                Reported width: <output id="measured">{Math.round(width ?? 0)}</output>
            </p>
            <div
                id="left-panel"
                ref={right ? undefined : ref}
                style={{ width: 260, height: 100, outline: "2px solid #64748b" }}
            >
                Left panel, fixed 260px
            </div>
            <div
                id="right-panel"
                ref={right ? ref : undefined}
                style={{ width: "50vw", height: 100, outline: "2px solid #16a34a", marginTop: 20 }}
            >
                Right panel, 50vw
            </div>
        </>
    );
}
function OutsideApp() {
    useReady();
    const [target, setTarget] = React.useState<HTMLElement | null>(null);
    const [open, setOpen] = React.useState(true);
    React.useLayoutEffect(() => setTarget(document.getElementById("outside-a")), []);
    return (
        <>
            <h1>Outside-click boundary · {VARIANT}</h1>
            <Button
                onClick={() => {
                    setTarget(document.getElementById("outside-b"));
                    audit.boundary = "b";
                }}
            >
                Use boundary B
            </Button>
            <section id="outside-a">
                <h2>Boundary A</h2>
                <button>Outside via A</button>
            </section>
            <section id="outside-b">
                <h2>Boundary B</h2>
                <button>Outside via B</button>
            </section>
            {target && open && (
                <ClickOutsideContainer
                    customEventTarget={target}
                    onClickOutside={() => {
                        audit.closed = true;
                        setOpen(false);
                    }}
                >
                    <div id="popover">Popover is open</div>
                </ClickOutsideContainer>
            )}
            <output id="open">{String(open)}</output>
        </>
    );
}
function MoveApp() {
    useReady();
    const [dataset, setDataset] = React.useState("A");
    const [pending, start] = React.useTransition();
    return (
        <>
            <h1>Column reordering during pending data · {VARIANT}</h1>
            <Button onClick={() => start(() => setDataset("B"))}>Start pending dataset B</Button>
            <output id="pending">{String(pending)}</output>
            <React.Suspense fallback={<p>Loading</p>}>
                <MoveGrid dataset={dataset} />
            </React.Suspense>
            <output id="move-log" />
        </>
    );
}
const never = new Promise<void>(() => {});
function Pending({ dataset }: { dataset: string }) {
    if (dataset === "B") {
        audit.pendingRenderSeen = true;
        throw never;
    }
    return null;
}
function MoveGrid({ dataset }: { dataset: string }) {
    const columns = React.useMemo(
        () => [
            { id: "a", title: "First", width: 180 },
            { id: "b", title: "Second", width: 180 },
            { id: "c", title: "Third", width: 180 },
        ],
        []
    );
    const get = React.useCallback(
        ([x, y]: readonly number[]) => ({
            kind: GridCellKind.Text,
            allowOverlay: false,
            data: `${x},${y}`,
            displayData: `${x},${y}`,
        }),
        []
    );
    const onMoved = React.useCallback(
        (from: number, to: number) => {
            audit.moves.push({ dataset, from, to });
            document.getElementById("move-log")!.textContent = JSON.stringify(audit.moves);
        },
        [dataset]
    );
    const props = useMoveableColumns({ columns, getCellContent: get as any, onColumnMoved: onMoved });
    return (
        <>
            <p>
                Committed dataset: <output id="dataset">{dataset}</output>
            </p>
            <Button onClick={() => props.onColumnMoved(0, 1)}>Move first column right</Button>
            <DataEditor {...props} rows={100} width={760} height={400} initialSize={[760, 400]} />
            <Pending dataset={dataset} />
        </>
    );
}
function LayoutEventChild({ value }: { value: number }) {
    React.useLayoutEffect(() => {
        if (value > 0) window.dispatchEvent(new Event("change"));
    }, [value]);
    return null;
}
function LayoutInputChild({
    input,
    setValue,
}: {
    input: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    React.useLayoutEffect(() => {
        if (input > 0) setValue(v => v + 1);
    }, [input, setValue]);
    return null;
}
function LayoutScrollChild({
    offset,
    setRegion,
}: {
    offset: number;
    setRegion: React.Dispatch<React.SetStateAction<any>>;
}) {
    React.useLayoutEffect(
        () => setRegion({ x: 0, y: offset === 0 ? 99 : 88, width: 10, height: 10 }),
        [offset, setRegion]
    );
    return null;
}
function LayoutEventApp() {
    useReady();
    const [phase, setPhase] = React.useState(0),
        [observed, setObserved] = React.useState(-1);
    useEventListener("change", () => setObserved(phase), window, false);
    return (
        <>
            <h1>Child layout event diagnostic · {VARIANT}</h1>
            <Button onClick={() => setPhase(1)}>Apply version 1</Button>
            <LayoutEventChild value={phase} />
            <p>
                Expected: 1; actual: <output id="actual">{observed}</output>
            </p>
        </>
    );
}
function LayoutInputApp() {
    useReady();
    const [input, setInput] = React.useState(0);
    const [value, setValue] = useStateWithReactiveInput(input);
    return (
        <>
            <h1>Child layout reactive input diagnostic · {VARIANT}</h1>
            <Button onClick={() => setInput(10)}>Set 10 and increment</Button>
            <LayoutInputChild input={input} setValue={setValue} />
            <p>
                Expected: 11; actual: <output id="actual">{value}</output>
            </p>
        </>
    );
}
function LayoutScrollApp() {
    useReady();
    const [y, setY] = React.useState(0);
    const vr = React.useRef({ x: 0, y: 99, width: 10, height: 10 });
    const args: any[] = [undefined, y, 20];
    if (VARIANT === "base") args.push(vr);
    args.push(() => {});
    const value = (useInitialScrollOffset as any)(...args);
    if (VARIANT === "base") vr.current = value.visibleRegion;
    return (
        <>
            <h1>Child layout viewport diagnostic · {VARIANT}</h1>
            <Button onClick={() => setY(20)}>Apply offset and report viewport</Button>
            <LayoutScrollChild offset={y} setRegion={value.setVisibleRegion} />
            <p>
                Expected measured row: 88; actual: <output id="actual">{value.visibleRegion.y}</output>
            </p>
        </>
    );
}
const App =
    scenario === "resize-observer"
        ? ResizeApp
        : scenario === "outside-target"
          ? OutsideApp
          : scenario === "move-pending"
            ? MoveApp
            : scenario === "layout-event"
              ? LayoutEventApp
              : scenario === "layout-input"
                ? LayoutInputApp
                : scenario === "layout-scroll"
                  ? LayoutScrollApp
                  : GridApp;
const root = createRoot(document.getElementById("app")!);
root.render(
    query.get("strict") === "1" ? (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    ) : (
        <App />
    )
);
