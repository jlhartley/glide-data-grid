import { afterEach, expect, it, vi } from "vitest";
import { SpriteManager } from "../src/internal/data-grid/data-grid-sprites.js";
import { getDefaultTheme } from "../src/index.js";

afterEach(() => {
    vi.unstubAllGlobals();
});

it("settles mixed successful and rejected sprite decodes without retrying failed icons", async () => {
    let resolve!: () => void;
    let reject!: (error: Error) => void;
    const pending = [
        new Promise<void>(r => {
            resolve = r;
        }),
        new Promise<void>((_, r) => {
            reject = r;
        }),
    ];
    const decode = vi.fn(() => pending.shift());
    vi.stubGlobal(
        "Image",
        vi.fn(() => Object.assign(document.createElement("img"), { decode }))
    );
    const settled = vi.fn();
    const manager = new SpriteManager({ good: () => "<svg/>", bad: () => "invalid" }, settled);
    const ctx = document.createElement("canvas").getContext("2d")!;
    const draw = (name: string) => manager.drawSprite(name, "normal", ctx, 0, 0, 20, getDefaultTheme());
    draw("good");
    draw("bad");
    resolve();
    await Promise.resolve();
    expect(settled).not.toHaveBeenCalled();
    reject(new Error("Invalid SVG"));
    await vi.waitFor(() => expect(settled).toHaveBeenCalledOnce());
    draw("bad");
    expect(decode).toHaveBeenCalledTimes(2);
});
