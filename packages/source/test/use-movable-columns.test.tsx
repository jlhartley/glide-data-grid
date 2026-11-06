import * as React from "react";
import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { GridCellKind } from "@glideapps/glide-data-grid";
import { useMoveableColumns } from "../src/use-movable-columns.js";
afterEach(cleanup);

it("a suspended movable-columns render cannot publish its callback", () => {
    const a = vi.fn(),
        b = vi.fn(),
        pending = new Promise<void>(() => {});
    const columns = [
        { title: "A", width: 100 },
        { title: "B", width: 100 },
    ];
    const { result, rerender } = renderHook(
        ({ handler, suspend }) => {
            const value = useMoveableColumns({
                columns,
                onColumnMoved: handler,
                getCellContent: () => ({ kind: GridCellKind.Text, allowOverlay: false, data: "", displayData: "" }),
            });
            if (suspend) throw pending;
            return value;
        },
        {
            initialProps: { handler: a, suspend: false },
            wrapper: ({ children }) => <React.Suspense fallback={null}>{children}</React.Suspense>,
        }
    );
    rerender({ handler: b, suspend: true });
    act(() => result.current.onColumnMoved(0, 1));
    expect(a).toHaveBeenCalledOnce();
    expect(b).not.toHaveBeenCalled();
});

it("keeps the drag callback identity while publishing the latest committed handler", () => {
    const columns = [
        { title: "A", width: 100 },
        { title: "B", width: 100 },
    ];
    const first = vi.fn(),
        next = vi.fn();
    const { result, rerender } = renderHook(
        handler =>
            useMoveableColumns({
                columns,
                onColumnMoved: handler,
                getCellContent: () => ({ kind: GridCellKind.Text, allowOverlay: false, data: "", displayData: "" }),
            }),
        { initialProps: first }
    );
    const move = result.current.onColumnMoved;
    rerender(next);
    expect(result.current.onColumnMoved).toBe(move);
    act(() => move(0, 1));
    expect(first).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(0, 1);
});
