import * as React from "react";
import { cleanup, fireEvent, render, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import DataGridOverlayEditor from "../src/internal/data-grid-overlay-editor/data-grid-overlay-editor.js";
import {
    getDefaultTheme,
    GridCellKind,
    type TextCell,
    type GridCell,
    type ProvideEditorCallback,
} from "../src/index.js";

const content: TextCell = { kind: GridCellKind.Text, allowOverlay: true, data: "start", displayData: "start" };
const provideEditor: ProvideEditorCallback<GridCell> =
    () =>
    ({ value, onChange }) => (
        <input
            aria-label="edit"
            value={(value as TextCell).data}
            onChange={e => onChange({ ...content, data: e.target.value })}
        />
    );
const props = {
    content,
    target: { x: 0, y: 0, width: 100, height: 30 },
    cell: [0, 0] as const,
    id: "editor",
    theme: getDefaultTheme(),
    forceEditMode: true,
    highlight: false,
    activation: { inputType: "keyboard", key: "Enter" } as const,
    onFinishEditing: vi.fn(),
    getCellRenderer: () => undefined,
    provideEditor,
};

afterEach(cleanup);

it("resolves a sibling portal after attachment, including Strict Mode replay", () => {
    function Parent() {
        const target = React.useRef<HTMLDivElement>(null);
        return (
            <React.StrictMode>
                <DataGridOverlayEditor {...props} portalElementRef={target as React.RefObject<HTMLDivElement>} />
                <div ref={target} data-testid="target" />
            </React.StrictMode>
        );
    }
    const { getByTestId } = render(<Parent />, { reactStrictMode: true });
    expect(within(getByTestId("target")).getByLabelText("edit")).toBeTruthy();
});

it("validates against the last committed editor value and follows a replacement portal", () => {
    const first = document.createElement("div");
    const second = document.createElement("div");
    document.body.append(first, second);
    const validateCell = vi.fn(() => true);
    const target = { current: first };
    const { rerender, unmount } = render(
        <DataGridOverlayEditor {...props} validateCell={validateCell} portalElementRef={target} />
    );
    expect(validateCell).toHaveBeenCalledWith([0, 0], content, content);
    fireEvent.change(within(first).getByLabelText("edit"), { target: { value: "next" } });
    fireEvent.change(within(first).getByLabelText("edit"), { target: { value: "last" } });
    expect(validateCell).toHaveBeenLastCalledWith(
        [0, 0],
        expect.objectContaining({ data: "last" }),
        expect.objectContaining({ data: "next" })
    );
    target.current = second;
    rerender(<DataGridOverlayEditor {...props} validateCell={validateCell} portalElementRef={target} />);
    expect(within(first).queryByLabelText("edit")).toBeNull();
    expect(within(second).getByLabelText("edit")).toHaveProperty("value", "last");
    unmount();
    first.remove();
    second.remove();
});
