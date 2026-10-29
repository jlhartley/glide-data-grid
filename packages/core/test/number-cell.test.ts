import { describe, expect, test } from "vitest";
import { numberCellRenderer } from "../src/cells/number-cell.js";
import { GridCellKind, type NumberCell } from "../src/internal/data-grid/data-grid-types.js";

const cell: NumberCell = {
    kind: GridCellKind.Number,
    data: 10,
    displayData: "ten",
    allowOverlay: true,
};

describe("number cell paste precedence", () => {
    test.each([
        { rawValue: 0, text: "99", expected: 0 },
        { rawValue: -2.5, text: "99", expected: -2.5 },
        { rawValue: "12.5 kg", text: "99", expected: 12.5 },
        { rawValue: undefined, text: "7.5 kg", expected: 7.5 },
        { rawValue: null, text: "7.5 kg", expected: 7.5 },
        { rawValue: false, text: "7.5 kg", expected: 7.5 },
    ])("uses $rawValue / $text without mutating the input cell", ({ rawValue, text, expected }) => {
        const original = { ...cell };
        const result = numberCellRenderer.onPaste(text, original, { rawValue, formattedString: "formatted" });
        expect(result).toEqual({ ...cell, data: expected, displayData: "formatted" });
        expect(original).toEqual(cell);
    });

    test.each([Number.NaN, "not a number", "", 10])("does not edit for invalid or unchanged raw value %s", rawValue => {
        expect(numberCellRenderer.onPaste("99", cell, { rawValue })).toBeUndefined();
    });

    test("keeps the existing display text when no formatted text is supplied", () => {
        expect(numberCellRenderer.onPaste("99", cell, { rawValue: 3 })).toEqual({ ...cell, data: 3 });
    });
});
