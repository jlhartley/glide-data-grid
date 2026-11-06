declare const location: readonly [number, number] | undefined;
export const value = { ...(location && { location }) };
