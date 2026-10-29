// Compile with tsconfig.type-tests.json; this file has no runtime assertions.
import type { CustomCell, BooleanEmpty, BooleanIndeterminate } from "../src/index.js";
import type { PrepResult } from "../src/cells/cell-types.js";

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
type Assert<T extends true> = T;

// The pre-existing {} contract accepts primitives as well as objects, but excludes nullish values.
export type DefaultCustomData = Assert<Equal<CustomCell["data"], {}>>;
export type RendererData = Assert<Equal<PrepResult["renderer"], object>>;
export type PrimitiveCustomData = Assert<
    Equal<CustomCell<string | number | boolean | symbol | bigint>["data"], string | number | boolean | symbol | bigint>
>;
export type EmptyAlias = Assert<Equal<BooleanEmpty, null>>;
export type IndeterminateAlias = Assert<Equal<BooleanIndeterminate, undefined>>;

// @ts-expect-error Null must remain invalid as custom data.
export type NullCustomData = CustomCell<null>;
// @ts-expect-error Undefined must remain invalid as custom data.
export type UndefinedCustomData = CustomCell<undefined>;
// @ts-expect-error Unknown includes nullish values and must remain invalid.
export type UnknownCustomData = CustomCell<unknown>;
