import {
    type CellArray,
    CompactSelection,
    type DataEditorProps,
    type DataEditorRef,
    type EditableGridCell,
    type GridCell,
    GridCellKind,
    type Item,
    type Rectangle,
} from "@glideapps/glide-data-grid";
import range from "lodash/range.js";
import chunk from "lodash/chunk.js";
import React from "react";

// type Range = readonly [startIndex: number, endIndex: number];
export type RowCallback<T> = (page: number, pageSize: number) => Promise<readonly T[] | null>;
export type RowToCell<T> = (row: T, colIndex: number, rowIndex: number) => GridCell;
export type RowEditedCallback<T> = (cell: Item, newVal: EditableGridCell, rowData: T) => T | undefined;
export function useAsyncDataSource<TRowType>(
    pageSize: number,
    maxConcurrency: number,
    getRowData: RowCallback<TRowType>,
    toCell: RowToCell<TRowType>,
    onEdited: RowEditedCallback<TRowType>,
    gridRef: React.RefObject<DataEditorRef | null>
): Pick<DataEditorProps, "getCellContent" | "onVisibleRegionChanged" | "onCellEdited" | "getCellsForSelection"> {

    pageSize = Math.max(pageSize, 1);
    const loadingRef = React.useRef(CompactSelection.empty());
    const dataRef = React.useRef<TRowType[]>([]);

    const [visiblePages, setVisiblePages] = React.useState<Rectangle>({ x: 0, y: 0, width: 0, height: 0 });
    const visiblePagesRef = React.useRef(visiblePages);
    visiblePagesRef.current = visiblePages;

    // Loading ref is redundant?
    const pagesLoaded = React.useRef<Set<number>>(new Set());

    const fetchingPages = React.useRef<Set<number>>(new Set());
    // Queue of pages being fetched
    const fetchQueue = React.useRef<number[]>([]);
    const debounceTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);


    const onVisibleRegionChanged: NonNullable<DataEditorProps["onVisibleRegionChanged"]> = React.useCallback(
        region => {
            setVisiblePages(cv => {
                if (region.x === cv.x && region.y === cv.y && region.width === cv.width && region.height === cv.height) return cv;
                return region;
            });
        },
        []
    );

    const getCellContent = React.useCallback<DataEditorProps["getCellContent"]>(
        cell => {
            const [col, row] = cell;
            const rowData: TRowType | undefined = dataRef.current[row];
            if (rowData !== undefined) {
                return toCell(rowData, col, row);
            }
            return {
                kind: GridCellKind.Loading,
                allowOverlay: false,
            };
        },
        [toCell]
    );

    const loadPage = React.useCallback(
        async (page: number) => {
            loadingRef.current = loadingRef.current.add(page);

            if (pagesLoaded.current.has(page) || fetchingPages.current.has(page)) return

            fetchingPages.current.add(page);
            // console.log("Fetching page: ", page);

            const startIndex = page * pageSize;
            // const endIndex = (page + 1) * pageSize;
            // Provide page and pageSize directly to getRowData

            // TODO: Try and make keyset pagination work. Might not be possible
            // with the visible region implementation of endless scrolling

            const d = await getRowData(page, pageSize);
            fetchingPages.current.delete(page);
            // Allow getRowData to have a problem and just return null
            if (d === null) {
                loadingRef.current.remove(page);
                // fetchingPages.current.delete(page);
                return
            }

            const vr = visiblePagesRef.current;

            const damageList: { cell: [number, number] }[] = [];

            // Populate the dataRef array, which holds the state of all rows
            const data = dataRef.current;
            for (let i = 0; i < d.length; i++) {
                data[i + startIndex] = d[i];
                // let col = vr.x would work, if not for frozen columns
                for (let col = 0; col <= vr.x + vr.width; col++) {
                    damageList.push({
                        cell: [col, i + startIndex],
                    });
                }
            }
            gridRef.current?.updateCells(damageList);
            pagesLoaded.current.add(page);
        },
        [getRowData, gridRef, pageSize]
    );

    /** Simple queue processor limiting concurrency */
    const processQueue = React.useCallback(() => {
        while (
            fetchQueue.current.length > 0 &&
            fetchingPages.current.size <= maxConcurrency
        ) {
            const next = fetchQueue.current.shift();
            if (next !== undefined) void loadPage(next);
        }
    }, [loadPage, maxConcurrency]);

    const getCellsForSelection = React.useCallback(
        (r: Rectangle): (() => Promise<CellArray>) => {
            return async () => {
                const firstPage = Math.max(0, Math.floor(r.y / pageSize));
                const lastPage = Math.floor((r.y + r.height) / pageSize);

                for (const pageChunk of chunk(
                    range(firstPage, lastPage + 1).filter(i => !loadingRef.current.hasIndex(i)),
                    maxConcurrency
                )) {
                    // Should be allSettled?
                    await Promise.all(pageChunk.map(loadPage));
                }

                const result: GridCell[][] = [];

                for (let y = r.y; y < r.y + r.height; y++) {
                    const row: GridCell[] = [];
                    for (let x = r.x; x < r.x + r.width; x++) {
                        row.push(getCellContent([x, y]));
                    }
                    result.push(row);
                }

                return result;
            };
        },
        [getCellContent, loadPage, maxConcurrency, pageSize]
    );

    /** Load one or more pages, using the visble region to find the first and last page to load */
    React.useEffect(
        () => {
            const r = visiblePages;
            const firstPage = Math.max(0, Math.floor((r.y - pageSize / 2) / pageSize));
            const lastPage = Math.floor((r.y + r.height + pageSize / 2) / pageSize);

            // Queue pages to load, but debounced
            if (debounceTimer.current !== null) clearTimeout(debounceTimer.current);
            debounceTimer.current = setTimeout(() => {
                for (const page of range(firstPage, lastPage + 1)) {
                    if (loadingRef.current.hasIndex(page)) continue;
                    fetchQueue.current.push(page);
                    // void loadPage(page);
                }
                processQueue();
            }, 150);
        },
        [loadPage, pageSize, visiblePages, processQueue]
    );

    const onCellEdited = React.useCallback(
        (cell: Item, newVal: EditableGridCell) => {
            const [, row] = cell;
            const current = dataRef.current[row];
            if (current === undefined) return;

            const result = onEdited(cell, newVal, current);
            if (result !== undefined) {
                dataRef.current[row] = result;
            }
        },
        [onEdited]
    );

    return {
        getCellContent,
        onVisibleRegionChanged,
        onCellEdited,
        getCellsForSelection,
    };
}
