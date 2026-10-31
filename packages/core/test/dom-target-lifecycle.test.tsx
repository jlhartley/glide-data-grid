import * as React from "react";
import { act, cleanup, fireEvent, render, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useResizeDetector } from "../src/common/resize-detector.js";
import ClickOutsideContainer from "../src/internal/click-outside-container/click-outside-container.js";
import { useEventListener } from "../src/common/utils.js";
import DataGrid, { type DataGridProps } from "../src/internal/data-grid/data-grid.js";
import { CompactSelection, GridCellKind } from "../src/internal/data-grid/data-grid-types.js";
import { getDefaultTheme } from "../src/index.js";
import { AllCellRenderers } from "../src/cells/index.js";
import ImageWindowLoaderImpl from "../src/common/image-window-loader.js";
import { mergeAndRealizeTheme } from "../src/common/styles.js";

afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});
const basicProps: DataGridProps = {
    cellXOffset: 0,
    cellYOffset: 0,
    headerIcons: undefined,
    isDraggable: undefined,
    onCanvasBlur: () => undefined,
    onCanvasFocused: () => undefined,
    onCellFocused: () => undefined,
    onContextMenu: () => undefined,
    onDragEnd: () => undefined,
    onDragLeave: () => undefined,
    onDragOverCell: () => undefined,
    onDragStart: () => undefined,
    onDrop: () => undefined,
    onHeaderIndicatorClick: () => undefined,
    onItemHovered: () => undefined,
    onKeyDown: () => undefined,
    onKeyUp: () => undefined,
    onMouseDown: () => undefined,
    onMouseMoveRaw: () => undefined,
    onMouseUp: () => undefined,
    smoothScrollX: undefined,
    smoothScrollY: undefined,
    allowResize: undefined,
    canvasRef: undefined,
    disabledRows: undefined,
    eventTargetRef: undefined,
    fillHandle: undefined,
    fixedShadowX: undefined,
    fixedShadowY: undefined,
    getGroupDetails: undefined,
    getRowThemeOverride: undefined,
    highlightRegions: undefined,
    imageWindowLoader: new ImageWindowLoaderImpl(),
    onHeaderMenuClick: undefined,
    prelightCells: undefined,
    translateX: undefined,
    translateY: undefined,
    dragAndDropState: undefined,
    drawFocusRing: true,
    drawHeader: undefined,
    drawCell: undefined,
    isFocused: true,
    experimental: undefined,
    columns: [
        {
            title: "A",
            width: 150,
        },
        {
            title: "B",
            width: 160,
        },
        {
            title: "C",
            width: 170,
        },
        {
            title: "D",
            width: 180,
        },
        {
            title: "E",
            width: 190,
        },
    ],
    isFilling: false,
    enableGroups: false,
    theme: mergeAndRealizeTheme(getDefaultTheme()),
    freezeColumns: 0,
    selection: {
        current: undefined,
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty(),
    },
    firstColAccessible: true,
    onMouseMove: () => undefined,
    getCellContent: cell => ({
        kind: GridCellKind.Text,
        allowOverlay: false,
        data: `${cell[0]},${cell[1]}`,
        displayData: `${cell[0]},${cell[1]}`,
    }),
    groupHeaderHeight: 0,
    headerHeight: 36,
    accessibilityHeight: 50,
    height: 1000,
    width: 1000,
    isDragging: false,
    isResizing: false,
    resizeColumn: undefined,
    freezeTrailingRows: 0,
    hasAppendRow: false,
    rowHeight: 32,
    rows: 1000,
    verticalBorder: () => true,
    getCellRenderer: cell => {
        if (cell.kind === GridCellKind.Custom) return undefined;
        return AllCellRenderers.find(x => x.kind === cell.kind) as any;
    },
    resizeIndicator: "full",
};

it("resize observation follows a replacement node without replacing the callback ref", () => {
    const observers: { observe: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> }[] = [];
    vi.stubGlobal(
        "ResizeObserver",
        vi.fn(() => {
            const observer = { observe: vi.fn(), disconnect: vi.fn() };
            observers.push(observer);
            return observer;
        })
    );
    function Parent({ version }: { version: number }) {
        const { ref } = useResizeDetector();
        return <div data-testid="node" key={version} ref={ref} />;
    }
    const { getByTestId, rerender } = render(<Parent version={0} />);
    const first = getByTestId("node");
    rerender(<Parent version={0} />);
    const active = observers.at(-1)!;
    rerender(<Parent version={1} />);
    const second = getByTestId("node");
    expect(second).not.toBe(first);
    expect(observers.flatMap(observer => observer.observe.mock.calls).some(([node]) => node === second)).toBe(true);
    expect(active.disconnect).toHaveBeenCalledOnce();
});

it("outside-click subscriptions follow target changes and clean up the original listeners", () => {
    const a = document.createElement("div"),
        b = document.createElement("div");
    const onOutside = vi.fn();
    const addA = vi.spyOn(a, "addEventListener");
    const removeA = vi.spyOn(a, "removeEventListener");
    const { rerender, unmount } = render(<ClickOutsideContainer onClickOutside={onOutside} customEventTarget={a} />);
    rerender(<ClickOutsideContainer onClickOutside={onOutside} customEventTarget={b} />);
    try {
        fireEvent.pointerDown(b);
        expect.soft(onOutside).toHaveBeenCalledOnce();
        const beforeOldTarget = onOutside.mock.calls.length;
        fireEvent.pointerDown(a);
        expect.soft(onOutside.mock.calls.length).toBe(beforeOldTarget);
        unmount();
        for (const [type, listener, capture] of addA.mock.calls) {
            expect
                .soft(removeA.mock.calls.some(call => call[0] === type && call[1] === listener && call[2] === capture))
                .toBe(true);
        }
    } finally {
        unmount();
        for (const [type, listener, capture] of addA.mock.calls) a.removeEventListener(type, listener, capture);
    }
});

it("DataGrid native listeners follow an experimental target switch", () => {
    const a = document.createElement("div"),
        b = document.createElement("div");
    a.dataset.audit = "A";
    b.dataset.audit = "B";
    const removeA = vi.spyOn(a, "removeEventListener");
    const addB = vi.spyOn(b, "addEventListener");
    const canvas = React.createRef<HTMLCanvasElement>();
    const { rerender } = render(<DataGrid {...basicProps} canvasRef={canvas} experimental={{ eventTarget: a }} />);
    rerender(<DataGrid {...basicProps} canvasRef={canvas} experimental={{ eventTarget: b }} />);
    const countAfterSwitch = addB.mock.calls.filter(([type]) => type === "pointerdown").length;
    expect(countAfterSwitch).toBeGreaterThan(0);
    expect(removeA.mock.calls.some(([name]) => name === "pointerdown")).toBe(true);
});

it("event subscriptions follow a stable resolver without rebinding an unchanged target", () => {
    const first = document.createElement("div"),
        second = document.createElement("div");
    const target = { current: first as HTMLDivElement | null };
    const resolve = () => target.current;
    const onClick = vi.fn();
    const addFirst = vi.spyOn(first, "addEventListener"),
        removeFirst = vi.spyOn(first, "removeEventListener");
    const addSecond = vi.spyOn(second, "addEventListener"),
        removeSecond = vi.spyOn(second, "removeEventListener");
    const { rerender, unmount } = renderHook(
        ({ passive, capture }) => {
            useEventListener("click", onClick, resolve, passive, capture);
        },
        { initialProps: { passive: false, capture: true } }
    );
    rerender({ passive: false, capture: true });
    expect(addFirst).toHaveBeenCalledOnce();
    target.current = second;
    rerender({ passive: false, capture: true });
    expect(removeFirst).toHaveBeenCalledWith("click", addFirst.mock.calls[0][1], { capture: true });
    first.click();
    second.click();
    expect(onClick).toHaveBeenCalledOnce();
    expect(onClick.mock.instances[0]).toBe(second);
    rerender({ passive: true, capture: false });
    expect(removeSecond).toHaveBeenCalledWith("click", addSecond.mock.calls[0][1], { capture: true });
    expect(addSecond).toHaveBeenLastCalledWith("click", expect.any(Function), { passive: true, capture: false });
    target.current = null;
    rerender({ passive: true, capture: false });
    second.click();
    expect(onClick).toHaveBeenCalledOnce();
    expect(removeSecond).toHaveBeenCalledTimes(2);
    unmount();
    expect(removeSecond).toHaveBeenCalledTimes(2);
});

it("ignores queued ResizeObserver reports from a detached node", () => {
    const observers: { notify: ResizeObserverCallback; disconnect: ReturnType<typeof vi.fn> }[] = [];
    vi.stubGlobal(
        "ResizeObserver",
        vi.fn((notify: ResizeObserverCallback) => {
            const observer = { notify, observe: vi.fn(), disconnect: vi.fn() };
            observers.push(observer);
            return observer;
        })
    );
    let width: number | undefined;
    function Parent({ version }: { version: number }) {
        const detector = useResizeDetector([100, 50]);
        width = detector.width;
        return <div key={version} ref={detector.ref} />;
    }
    const { rerender, unmount } = render(<Parent version={0} />, { reactStrictMode: true });
    expect(observers.length).toBeGreaterThanOrEqual(2);
    const old = observers.at(-1)!;
    rerender(<Parent version={1} />);
    const latest = observers.at(-1)!;
    const report = (observer: typeof latest, size: number) =>
        act(() =>
            observer.notify([{ contentRect: { width: size, height: 50 } } as ResizeObserverEntry], {} as ResizeObserver)
        );
    report(latest, 600);
    expect(width).toBe(600);
    report(old, 260);
    expect(width).toBe(600);
    unmount();
    for (const observer of observers) expect(observer.disconnect).toHaveBeenCalledOnce();
});
