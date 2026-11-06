import { expect, it } from "vitest";
import { direction } from "../src/common/utils.js";

it("preserves direction detection across combining marks and presentation ranges", () => {
    for (const value of ["שלום", "مرحبا", "123 שלום", "\uFB1D"]) {
        expect(direction(value)).toBe("rtl");
    }
    for (const value of ["", "hello שלום", "\u0300שלום", "\u02B8\u0300שלום", "\uFB1C\uFE00שלום"]) {
        expect(direction(value)).toBe("not-rtl");
    }
});
