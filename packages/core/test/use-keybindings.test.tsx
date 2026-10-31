import * as React from "react";
import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import {
    keybindingDefaults,
    realizeKeybinds,
    useKeybindingsWithDefaults,
    type Keybinds,
} from "../src/data-editor/data-editor-keybindings.js";

afterEach(cleanup);

it("renders once for changed, equal, default and legacy keybinding options", () => {
    let renders = 0;
    const { result, rerender } = renderHook(
        ({ keys }: { keys?: Partial<Keybinds> }) => {
            renders++;
            return useKeybindingsWithDefaults(keys);
        },
        { initialProps: { keys: undefined } as { keys?: Partial<Keybinds> } }
    );
    const defaults = result.current;
    expect(defaults).toEqual(realizeKeybinds(keybindingDefaults));
    for (const keys of [{}, { search: true }, { search: true }, { search: "ctrl+k" }, { first: false }, undefined]) {
        const before = renders;
        rerender({ keys });
        expect(renders - before).toBe(1);
    }
});

it("preserves identity for equivalent options, including property order and explicit defaults", () => {
    const { result, rerender } = renderHook(
        ({ keys }: { keys?: Partial<Keybinds> }) => useKeybindingsWithDefaults(keys),
        { initialProps: { keys: { search: true, clear: false } } }
    );
    const initial = result.current;
    rerender({ keys: { clear: false, search: true } });
    expect(result.current).toBe(initial);
    rerender({ keys: { ...keybindingDefaults, clear: false, search: true } });
    expect(result.current).toBe(initial);
});

it("retains every primitive setting and legacy precedence", () => {
    const options: Partial<Keybinds> = {
        first: false,
        last: false,
        pageUp: false,
        pageDown: false,
        goToFirstCell: "ctrl+x",
        selectToLastCell: "alt+End",
        search: "ctrl+k",
        copy: false,
    };
    const { result } = renderHook(() => useKeybindingsWithDefaults(options));
    expect(result.current).toEqual(
        realizeKeybinds({
            ...keybindingDefaults,
            ...options,
            goToFirstCell: "ctrl+x",
            goToLastCell: false,
            goToNextPage: false,
            goToPreviousPage: false,
            selectToFirstCell: false,
            selectToLastCell: "alt+End",
        })
    );
});

it("does not publish abandoned option changes", () => {
    const pending = new Promise<void>(() => {});
    const wrapper = ({ children }: React.PropsWithChildren) => (
        <React.Suspense fallback={null}>{children}</React.Suspense>
    );
    const { result, rerender } = renderHook(
        ({ search, suspend }) => {
            const value = useKeybindingsWithDefaults({ search });
            if (suspend) throw pending;
            return value;
        },
        { initialProps: { search: false, suspend: false }, wrapper }
    );
    const original = result.current;
    rerender({ search: true, suspend: true });
    rerender({ search: false, suspend: false });
    expect(result.current).toBe(original);
});

it("invalidates the memo for every configurable primitive", () => {
    const { result, rerender } = renderHook(
        ({ keys }: { keys?: Partial<Keybinds> }) => useKeybindingsWithDefaults(keys),
        {
            initialProps: { keys: undefined } as { keys?: Partial<Keybinds> },
        }
    );
    for (const key of Object.keys(keybindingDefaults) as (keyof Keybinds)[]) {
        const value = keybindingDefaults[key];
        const options = { [key]: typeof value === "boolean" ? !value : "ctrl+q" };
        rerender({ keys: options });
        expect(result.current).toEqual(realizeKeybinds({ ...keybindingDefaults, ...options }));
    }
});
