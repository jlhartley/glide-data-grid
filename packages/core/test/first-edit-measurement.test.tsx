import * as React from "react";
import { render, screen } from "@testing-library/react";
import { test, vi, expect } from "vitest";
import { DataEditor, GridCellKind } from "../src/index.js";
import { basicProps, prep, sendClick, Context, standardBeforeEach, standardAfterEach } from "./test-utils.js";
vi.mock("../src/common/resize-detector", () => ({
    useResizeDetector: () => ({ ref: undefined, width: 1000, height: 1000 }),
}));
// Native events and real scheduler: act would immediately reveal Suspense and mask the delay.
// jsdom does not implement default text input, so insert it explicitly for focused inputs.
test.each([false, true])("preserves initial typing with the real React scheduler (number=%s)", async number => {
    standardBeforeEach();
    const saved = vi.fn();
    vi.useFakeTimers();
    render(
        <DataEditor
            {...basicProps}
            getCellContent={() =>
                number
                    ? { kind: GridCellKind.Number, data: 0, displayData: "0", allowOverlay: true }
                    : { kind: GridCellKind.Text, data: "original", displayData: "original", allowOverlay: true }
            }
            onCellEdited={saved}
        />,
        { wrapper: Context }
    );
    prep();
    await vi.dynamicImportSettled();
    const canvas = screen.getByTestId("data-grid-canvas");
    sendClick(canvas, { clientX: 300, clientY: 84 });
    const g = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
    const was = g.IS_REACT_ACT_ENVIRONMENT;
    g.IS_REACT_ACT_ENVIRONMENT = false;
    try {
        canvas.focus();
        await vi.waitFor(() => expect(document.activeElement).toBe(canvas));
        // Let focus-driven grid work finish before measuring the first edit.
        await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        for (const key of number ? "12345" : "edited") {
            const el = document.activeElement!;
            el.dispatchEvent(
                new KeyboardEvent("keydown", { key, keyCode: key.toUpperCase().charCodeAt(0), bubbles: true })
            );
            if (el.matches("input,textarea")) {
                const input = el as HTMLInputElement;
                const setter = Object.getOwnPropertyDescriptor(
                    el.tagName === "INPUT" ? HTMLInputElement.prototype : HTMLTextAreaElement.prototype,
                    "value"
                )!.set!;
                setter.call(input, input.value + key);
                input.dispatchEvent(new Event("input", { bubbles: true }));
            }
            await new Promise(resolve => setTimeout(resolve, 75));
        }
        // Wait until the editor has focus before committing. The typing above still races its first reveal.
        await vi.waitFor(() => expect(document.activeElement?.matches("input,textarea")).toBe(true));
        document.activeElement!.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        await vi.waitFor(() =>
            expect(saved).toHaveBeenCalledWith(
                expect.anything(),
                expect.objectContaining({ data: number ? 12345 : "edited" })
            )
        );
    } finally {
        g.IS_REACT_ACT_ENVIRONMENT = was;
        standardAfterEach();
    }
});
