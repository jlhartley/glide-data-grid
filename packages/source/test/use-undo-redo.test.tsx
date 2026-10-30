import { act, renderHook } from "@testing-library/react";
import type { RefObject } from "react";
import { CompactSelection, GridCellKind, type DataEditorRef, type EditableGridCell, type GridSelection, type Item } from "@glideapps/glide-data-grid";
import { afterEach, expect, test, vi } from "vitest";
import { useUndoRedo } from "../src/use-undo-redo.js";

const text = (data: string): EditableGridCell => ({ kind: GridCellKind.Text, data, displayData: data, allowOverlay: false });
const selection: GridSelection = {
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
    current: { cell: [0, 0], range: { x: 0, y: 0, width: 1, height: 1 }, rangeStack: [] },
};

afterEach(() => {
    vi.useRealTimers();
});

function setup() {
    vi.useFakeTimers();
    let cell = text("before");
    const updateCells = vi.fn();
    const grid: DataEditorRef = {
        updateCells,
        appendRow: vi.fn(async () => {}),
        appendColumn: vi.fn(async () => {}),
        getBounds: vi.fn(),
        focus: vi.fn(),
        emit: vi.fn(async () => {}),
        scrollTo: vi.fn(),
        remeasureColumns: vi.fn(),
        getMouseArgsForPosition: vi.fn(),
    };
    const gridRef: RefObject<DataEditorRef | null> = { current: grid };
    const getCellContent = () => cell;
    const onCellEdited = vi.fn((_location: Item, value: EditableGridCell) => { cell = value; });
    const hook = renderHook(() => useUndoRedo(gridRef, getCellContent, onCellEdited));
    return { ...hook, gridRef, updateCells, onCellEdited, getCellContent };
}

test("an unattached grid with no selection or history is safe", () => {
    const { result, gridRef, onCellEdited, updateCells } = setup();
    gridRef.current = null;
    act(() => result.current.undo());
    act(() => result.current.redo());
    expect(onCellEdited).not.toHaveBeenCalled();
    expect(updateCells).not.toHaveBeenCalled();
    expect(result.current.canUndo).toBe(false);
    expect(result.current.canRedo).toBe(false);
});

test("undo and redo retain empty text and cell coordinates containing zero", () => {
    const { result, getCellContent, updateCells } = setup();
    act(() => result.current.onGridSelectionChange(selection));
    act(() => result.current.onCellEdited([0, 0], text("")));
    act(() => vi.runOnlyPendingTimers());
    expect(result.current.canUndo).toBe(true);
    act(() => result.current.undo());
    expect(getCellContent()).toEqual(text("before"));
    expect(updateCells).toHaveBeenLastCalledWith([{ cell: [0, 0] }]);
    expect(result.current.gridSelection).toEqual(selection);
    expect(result.current.canRedo).toBe(true);
    act(() => result.current.redo());
    expect(getCellContent()).toEqual(text(""));
    expect(updateCells).toHaveBeenCalledTimes(2);
});

test("a pending undo does not apply edits when the grid has detached", () => {
    const { result, gridRef, onCellEdited, updateCells, getCellContent } = setup();
    act(() => result.current.onGridSelectionChange(selection));
    act(() => result.current.onCellEdited([0, 0], text("")));
    act(() => vi.runOnlyPendingTimers());
    gridRef.current = null;
    onCellEdited.mockClear();
    act(() => result.current.undo());
    expect(onCellEdited).not.toHaveBeenCalled();
    expect(updateCells).not.toHaveBeenCalled();
    expect(getCellContent()).toEqual(text(""));
});
