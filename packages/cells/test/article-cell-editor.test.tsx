import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { EditorProps, ViewerProps } from "@toast-ui/react-editor";
import { getDefaultTheme, GridCellKind } from "@glideapps/glide-data-grid";
import ArticleCellEditor from "../src/cells/article-cell-editor.js";
import type { ArticleCell } from "../src/cells/article-cell-types.js";

vi.mock("@toast-ui/react-editor", () => ({
    // Match the pinned 3.2.3 wrapper: a class ref exposes getInstance(), while
    // onChange receives the mode from @toast-ui/editor 3.2.2, not Markdown.
    Editor: class ToastEditorMock extends React.Component<EditorProps> {
        private markdown = this.props.initialValue ?? "";

        public getInstance() {
            return { getMarkdown: () => this.markdown };
        }

        public render() {
            return (
                <textarea
                    aria-label="Article"
                    defaultValue={this.markdown}
                    onChange={e => {
                        this.markdown = e.target.value;
                        this.props.onChange?.(this.props.initialEditType ?? "markdown");
                    }}
                    onInput={e => {
                        // Also allow an instance update without a change notification.
                        this.markdown = e.currentTarget.value;
                    }}
                />
            );
        }
    },
    Viewer: (props: ViewerProps) => <div data-testid="article-viewer">{props.initialValue}</div>,
}));

afterEach(cleanup);

function renderEditor(readonly = false) {
    const value: ArticleCell = {
        kind: GridCellKind.Custom,
        allowOverlay: true,
        copyData: "Original article",
        readonly,
        data: { kind: "article-cell", markdown: "# Original\n\nSome **content**." },
    };
    const onChange = vi.fn();
    const onFinishedEditing = vi.fn();
    const result = render(
        <ArticleCellEditor
            value={value}
            onChange={onChange}
            onFinishedEditing={onFinishedEditing}
            isHighlighted={false}
            target={{ x: 0, y: 0, width: 100, height: 30 }}
            forceEditMode={false}
            theme={getDefaultTheme()}
        />
    );
    return { ...result, value, onChange, onFinishedEditing };
}

describe("ArticleCell editor", () => {
    it("initialises the editor with the existing Markdown", () => {
        const result = renderEditor();
        expect(result.getByRole("textbox")).toHaveProperty("value", result.value.data.markdown);
        expect(result.onChange).not.toHaveBeenCalled();
        expect(result.onFinishedEditing).not.toHaveBeenCalled();
    });

    it("keeps edits local and saves Markdown instead of the wysiwyg event argument", () => {
        const result = renderEditor();
        const original = result.value.data.markdown;
        const markdown = "# Edited\n\nA **bold** article.\n\n- First\n- Second";
        fireEvent.change(result.getByRole("textbox"), { target: { value: markdown } });
        expect(result.onChange).not.toHaveBeenCalled();
        expect(result.onFinishedEditing).not.toHaveBeenCalled();
        expect(result.value.data.markdown).toBe(original);

        fireEvent.click(result.getByRole("button", { name: "Save" }));
        expect(result.onFinishedEditing).toHaveBeenCalledTimes(1);
        expect(result.onFinishedEditing).toHaveBeenCalledWith({
            ...result.value,
            data: { ...result.value.data, markdown },
        });
        expect(result.value.data.markdown).toBe(original);
    });

    it("reads the latest instance content on Save even without a change notification", () => {
        const result = renderEditor();
        const input = result.getByRole("textbox");
        fireEvent.change(input, { target: { value: "Earlier draft" } });
        fireEvent.input(input, { target: { value: "Latest draft" } });
        fireEvent.click(result.getByRole("button", { name: "Save" }));
        expect(result.onFinishedEditing.mock.calls[0][0].data.markdown).toBe("Latest draft");
    });

    it("preserves content when saving without editing", () => {
        const result = renderEditor();
        fireEvent.click(result.getByRole("button", { name: "Save" }));
        expect(result.onFinishedEditing).toHaveBeenCalledWith(result.value);
    });

    it("saves an intentionally empty document", () => {
        const result = renderEditor();
        fireEvent.change(result.getByRole("textbox"), { target: { value: "" } });
        fireEvent.click(result.getByRole("button", { name: "Save" }));
        expect(result.onFinishedEditing.mock.calls[0][0].data.markdown).toBe("");
    });

    it("discards edits when Close is clicked", () => {
        const result = renderEditor();
        const original = result.value.data.markdown;
        fireEvent.change(result.getByRole("textbox"), { target: { value: "Discard this draft" } });
        fireEvent.click(result.getByRole("button", { name: "Close" }));
        expect(result.onFinishedEditing).toHaveBeenCalledTimes(1);
        expect(result.onFinishedEditing).toHaveBeenCalledWith(undefined);
        expect(result.onChange).not.toHaveBeenCalled();
        expect(result.value.data.markdown).toBe(original);
    });

    it("renders read-only Markdown in the viewer without editing controls", () => {
        const result = renderEditor(true);
        expect(result.getByTestId("article-viewer").textContent).toBe(result.value.data.markdown);
        expect(result.queryByRole("textbox")).toBeNull();
        expect(result.queryByRole("button")).toBeNull();
        expect(result.onChange).not.toHaveBeenCalled();
        expect(result.onFinishedEditing).not.toHaveBeenCalled();
    });
});
