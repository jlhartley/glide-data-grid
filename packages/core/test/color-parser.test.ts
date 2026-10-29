/* eslint-disable sonarjs/no-duplicate-string */
import { describe, expect, test, vi } from "vitest";
import {
    blend,
    blendCache,
    getLuminance,
    interpolateColors,
    parseToRgba,
    withAlpha,
} from "../src/internal/data-grid/color-parser.js";

describe("interpolateColors", () => {
    test("Smoke test", () => {
        expect(interpolateColors("rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)", 0.5)).toEqual("rgba(127, 127, 127, 1)");
    });

    test("Fully transparent inputs do not produce NaN (alpha 0)", () => {
        expect(interpolateColors("rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", 0.5)).toEqual("rgba(0, 0, 0, 0)");
    });

    test("Pre-multiplied alpha behavior with one side transparent", () => {
        // Left transparent, right opaque white
        expect(interpolateColors("rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)", 0.5)).toEqual(
            "rgba(255, 255, 255, 0.5)"
        );
        // Right transparent, left opaque white (symmetry check)
        expect(interpolateColors("rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0)", 0.5)).toEqual(
            "rgba(255, 255, 255, 0.5)"
        );
    });

    test("Clamp outside range: val <= 0 returns left, val >= 1 returns right", () => {
        expect(interpolateColors("rgba(10, 20, 30, 1)", "rgba(200, 210, 220, 1)", -0.25)).toEqual(
            "rgba(10, 20, 30, 1)"
        );
        expect(interpolateColors("rgba(10, 20, 30, 1)", "rgba(200, 210, 220, 1)", 1.25)).toEqual(
            "rgba(200, 210, 220, 1)"
        );
    });
});

describe("parseToRgba", () => {
    test("Parses common theme formats and composed output without computed styles", () => {
        const computedStyle = vi.spyOn(window, "getComputedStyle").mockImplementation(() => {
            throw new Error("Unexpected DOM colour parsing");
        });
        try {
            expect(parseToRgba("  ReBeccAPurple  ")).toEqual([102, 51, 153, 1]);
            expect(parseToRgba("#1234")).toEqual([17, 34, 51, 68 / 255]);
            expect(parseToRgba("hsla(120, 100%, 50%, 0.5)")).toEqual([0, 255, 0, 0.5]);
            expect(parseToRgba("transparent")).toEqual([0, 0, 0, 0]);
            // The first composition calculates 149.4 before rounding. Its output is
            // parsed again when theme overlays and selection fills are layered.
            const first = blend("rgba(255, 255, 255, 0.2)", "rgb(123, 123, 123)");
            expect(parseToRgba(first)).toEqual([149, 149, 149, 1]);
            expect(blend("rgba(0, 0, 0, 0.5)", first)).toEqual("rgba(75, 75, 75, 1)");
            expect(computedStyle).not.toHaveBeenCalled();
        } finally {
            computedStyle.mockRestore();
        }
    });

    test("Fractional RGB input still uses the DOM fallback", () => {
        const computedStyle = vi.spyOn(window, "getComputedStyle");
        const warning = vi.spyOn(console, "warn").mockImplementation(() => undefined);
        try {
            parseToRgba("rgba(149.4, 148.3, 147.2, 0.9)");
            expect(computedStyle).toHaveBeenCalledTimes(2);
        } finally {
            computedStyle.mockRestore();
            warning.mockRestore();
        }
    });

    test("Smoke test", () => {
        expect(parseToRgba("rgba(255, 255, 255, 1)")).toEqual([255, 255, 255, 1]);
    });
});

describe("withAlpha", () => {
    test("Smoke test", () => {
        expect(withAlpha("rgba(255, 255, 255, 1)", 0.3)).toEqual("rgba(255, 255, 255, 0.3)");
    });
});

describe("blend", () => {
    test("Rounds channels independently and preserves composited alpha", () => {
        // Output alpha is 0.625; straight RGB channels are 10.8, 21.6, 32.4.
        const foreground = "rgba(12, 24, 36, 0.25)";
        const background = "rgba(10, 20, 30, 0.5)";
        expect(blend(foreground, background)).toEqual("rgba(11, 22, 32, 0.625)");
        expect(blendCache(foreground, background)).toEqual(blend(foreground, background));
        expect(blendCache(foreground, background)).toEqual("rgba(11, 22, 32, 0.625)");
    });

    test("Passes through opaque foregrounds and missing backgrounds", () => {
        expect(blend("#123456", "white")).toEqual("#123456");
        expect(blend("rgba(12, 24, 36, 0.25)", undefined)).toEqual("rgba(12, 24, 36, 0.25)");
    });

    test("Rounds composited RGB channels to the nearest integer", () => {
        expect(blend("rgba(255, 255, 255, 0.2)", "rgba(123, 123, 123, 1)")).toEqual("rgba(149, 149, 149, 1)");
    });
});

describe("getLuminance", () => {
    test("Smoke test", () => {
        expect(getLuminance("rgba(255, 255, 255, 1)")).toEqual(1);
    });

    test("Transparent has zero luminance", () => {
        expect(getLuminance("rgba(0, 0, 0, 0)")).toEqual(0);
        expect(getLuminance("transparent")).toEqual(0);
    });
});
