import * as React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";

import { GridCellKind, getDefaultTheme } from "@glideapps/glide-data-grid";
import renderer, {
    type DateKind,
    type DatePickerCell,
    formatValueForHTMLInput,
} from "../src/cells/date-picker-cell.js";
import { vi, expect, describe, it, afterEach } from "vitest";

describe("formatValueForHTMLInput", () => {
    it.each([
        ["date", new Date("1970-01-01T00:00:00.100Z"), "1970-01-01"],
        ["datetime-local", new Date("1970-01-01T00:00:00.100Z"), "1970-01-01T00:00:00.100"],
        ["time", new Date("1970-01-01T00:00:00.100Z"), "00:00:00.100"],
    ])("check %p format and %p date leads correct format: {%p}", (format: string, date: Date, valueForHTML: string) => {
        expect(formatValueForHTMLInput(format as DateKind, date)).toStrictEqual(valueForHTML);
    });

    it.each([
        ["datetime-local", new Date("2023-01-01T12:00:00.000Z"), 60 * 60 * 1000, "2023-01-01T13:00:00.000"],
        ["datetime-local", new Date("2023-01-01T12:00:00.000Z"), -60 * 60 * 1000, "2023-01-01T11:00:00.000"],
        ["date", new Date("2023-01-01T23:30:00.000Z"), 60 * 60 * 1000, "2023-01-02"],
        ["date", new Date("2023-01-02T00:30:00.000Z"), -60 * 60 * 1000, "2023-01-01"],
        ["time", new Date("1970-01-01T10:00:00.000Z"), 30 * 60 * 1000, "10:30:00.000"],
        ["time", new Date("1970-01-01T10:00:00.000Z"), -30 * 60 * 1000, "09:30:00.000"],
    ])(
        "check %p format and %p date with timezoneOffsetMs %p leads to correct format: %p",
        (format: string, date: Date, timezoneOffsetMs: number, valueForHTML: string) => {
            expect(formatValueForHTMLInput(format as DateKind, date, timezoneOffsetMs)).toStrictEqual(valueForHTML);
        }
    );

    it("throws an error when a weird value is passed", () => {
        expect(() => formatValueForHTMLInput("weird" as DateKind, new Date())).toThrow("Unknown date kind weird");
    });
});

describe("editor", () => {
    afterEach(cleanup);

    function getMockDateCell(data: Partial<DatePickerCell["data"]> = {}): DatePickerCell {
        return {
            kind: GridCellKind.Custom,
            allowOverlay: true,
            copyData: "4",
            readonly: false,
            data: {
                kind: "date-picker-cell",
                date: new Date("2023-02-06T04:47:44.584Z"),
                displayDate: "2023-02-06T04:47:44.584Z",
                format: "time",
                ...data,
            },
        };
    }

    function renderEditor(value: DatePickerCell, onChange = vi.fn()) {
        const provided = renderer.provideEditor?.(value);
        if (provided === undefined || typeof provided === "function") {
            throw new Error("Editor is invalid");
        }
        const Editor = provided.editor;
        return render(
            <Editor
                value={value}
                isHighlighted={false}
                onChange={onChange}
                onFinishedEditing={vi.fn()}
                target={{ x: 0, y: 0, width: 100, height: 30 }}
                forceEditMode={false}
                theme={getDefaultTheme()}
            />
        );
    }

    it("renders into the dom with correct value", () => {
        const result = renderEditor(getMockDateCell());
        expect(result.getByTestId("date-picker-cell")).toHaveProperty("value", "04:47:44.584");
    });

    it.each<DateKind>(["date", "time", "datetime-local"])("renders with %s format", format => {
        const result = renderEditor(getMockDateCell({ format }));
        expect(result.getByTestId("date-picker-cell")).toHaveProperty("type", format);
    });

    it("renders a disabled text entry when readonly is true", () => {
        const value = { ...getMockDateCell(), readonly: true };
        const result = renderEditor(value);
        const input = result.getByDisplayValue(value.data.displayDate);
        expect(input).toHaveProperty("disabled", true);
        expect(result.queryByTestId("date-picker-cell")).toBeNull();
    });

    it("contains max, min, step when passed in", () => {
        const result = renderEditor(
            getMockDateCell({ format: "date", min: "2018-01-01", max: new Date("2018-12-31"), step: ".001" })
        );
        const input = result.getByTestId("date-picker-cell");
        expect(input).toHaveProperty("min", "2018-01-01");
        expect(input).toHaveProperty("max", "2018-12-31");
        expect(input).toHaveProperty("step", "0.001");
    });

    it('properly sets date when value is NOT ""', () => {
        const valueAsNumber = 100;

        const mockCellOnChange = vi.fn();
        const result = renderEditor(getMockDateCell(), mockCellOnChange);
        const input = result.getByTestId("date-picker-cell");
        fireEvent.change(input, {
            target: {
                value: "00:00:00.100",
            },
        });
        expect(mockCellOnChange).toHaveBeenCalledTimes(1);
        expect(mockCellOnChange).toBeCalledWith({
            kind: GridCellKind.Custom,
            allowOverlay: true,
            copyData: "4",
            readonly: false,
            data: {
                kind: "date-picker-cell",
                date: new Date(valueAsNumber),
                displayDate: new Date("2023-02-06T04:47:44.584Z").toISOString(),
                format: "time",
            },
        });
    });

    it('properly sets new date to undefined when value is ""', () => {
        const mockCellOnChange = vi.fn();
        const result = renderEditor(getMockDateCell(), mockCellOnChange);
        const input = result.getByTestId("date-picker-cell");
        fireEvent.change(input, { target: { value: "" } });
        expect(mockCellOnChange).toHaveBeenCalledTimes(1);
        expect(mockCellOnChange).toBeCalledWith({
            kind: GridCellKind.Custom,
            allowOverlay: true,
            copyData: "4",
            readonly: false,
            data: {
                kind: "date-picker-cell",
                // should be undefined since value is ''
                date: undefined,
                displayDate: new Date("2023-02-06T04:47:44.584Z").toISOString(),
                format: "time",
            },
        });
    });
});

describe("onPaste", () => {
    it.each([
        ["2023-02-06T04:47:44.584Z", "2023-02-06T04:47:44.584Z"],
        ["1995-12-17", "1995-12-17T00:00:00.000Z"],
        ["1995-12-17T03:24:00Z", "1995-12-17T03:24:00.000Z"],
        ["1995-12-17T03:24:00+00:00", "1995-12-17T03:24:00.000Z"],
        ["Sun Dec 17 1995 03:24:00 GMT", "1995-12-17T03:24:00.000Z"],
        ["100", "1970-01-01T00:00:00.100Z"],
        ["-1", "1969-12-31T23:59:59.999Z"],
    ])("correctly interprets pasted value %p as %p", (input: string, expected: string) => {
        // @ts-ignore
        const { date } = renderer.onPaste(input, {});
        expect(date.toISOString()).toStrictEqual(expected);
    });

    it.each([[""], ["invalid"], ["2020-20-12"], ["2020/20/12"], [undefined], [null], ["2020-12-10-10"]])(
        "correctly returns no value when onPaste is called with invalid value: %p",
        (input: string | undefined | null) => {
            // @ts-ignore
            const { date } = renderer.onPaste(input, {});
            expect(date).toBe(undefined);
        }
    );

    it("support time strings in onPaste", () => {
        // @ts-ignore
        const { date } = renderer.onPaste("01:02:03.400", { format: "time" });
        expect(date).toStrictEqual(new Date("1970-01-01T01:02:03.400Z"));
    });
});
