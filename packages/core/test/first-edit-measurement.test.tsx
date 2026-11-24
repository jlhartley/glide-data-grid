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
    await new Promise(resolve => setTimeout(resolve, 1000));
    const canvas = screen.getByTestId("data-grid-canvas");
    sendClick(canvas, { clientX: 300, clientY: 84 });
    const g = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
    const was = g.IS_REACT_ACT_ENVIRONMENT;
    g.IS_REACT_ACT_ENVIRONMENT = false;
    let latency: number | undefined;
    canvas.focus();
    await new Promise(resolve => setTimeout(resolve, 50));
    const start = performance.now();
    const focus = (e: Event) => {
        if ((e.target as Element).matches("input,textarea")) latency ??= performance.now() - start;
    };
    document.addEventListener("focusin", focus);
    try {
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
        await new Promise(resolve => setTimeout(resolve, 400));
        document.activeElement!.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        await new Promise(resolve => setTimeout(resolve, 30));
        expect(latency).toBeDefined();
        expect(saved).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({ data: number ? 12345 : "edited" })
        );
    } finally {
        document.removeEventListener("focusin", focus);
        g.IS_REACT_ACT_ENVIRONMENT = was;
        standardAfterEach();
    }
});
