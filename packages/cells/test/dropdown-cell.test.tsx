import * as React from "react";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { GridCellKind, getDefaultTheme } from "@glideapps/glide-data-grid";
import { afterEach, expect, it, vi } from "vitest";
import renderer, { type DropdownCell } from "../src/cells/dropdown-cell.js";

afterEach(cleanup);

it("moves the open dropdown to a replacement portal and retains keyboard editing", async () => {
    const value: DropdownCell = {
        kind: GridCellKind.Custom,
        allowOverlay: true,
        copyData: "",
        data: { kind: "dropdown-cell", value: undefined, allowedValues: ["Alpha", "Beta"] },
    };
    const provided = renderer.provideEditor?.(value);
    if (provided === undefined || typeof provided === "function") throw new Error("Editor is invalid");
    const Editor = provided.editor;
    const onFinishedEditing = vi.fn();
    const portal = { current: document.createElement("div") };

    function Harness({ version }: { version: number }) {
        return (
            <>
                <div
                    key={version}
                    ref={node => {
                        if (node !== null) portal.current = node;
                    }}
                    data-testid="menu-host"
                />
                <Editor
                    value={value}
                    isHighlighted={false}
                    onChange={vi.fn()}
                    onFinishedEditing={onFinishedEditing}
                    target={{ x: 0, y: 0, width: 100, height: 30 }}
                    forceEditMode={false}
                    theme={getDefaultTheme()}
                    portalElementRef={portal}
                />
            </>
        );
    }

    const { rerender } = render(<Harness version={0} />);
    const input = screen.getByRole("combobox");
    const original = screen.getByTestId("menu-host");
    expect(within(original).getByRole("option", { name: "Alpha" })).toBeDefined();
    expect(document.activeElement).toBe(input);

    rerender(<Harness version={1} />);
    const replacement = screen.getByTestId("menu-host");
    expect(replacement).not.toBe(original);
    expect(within(replacement).getByRole("option", { name: "Alpha" })).toBeDefined();
    expect(document.activeElement).toBe(input);

    fireEvent.keyDown(input, { key: "Enter" });
    await waitFor(() =>
        expect(onFinishedEditing).toHaveBeenCalledWith({ ...value, data: { ...value.data, value: "Alpha" } })
    );
});
