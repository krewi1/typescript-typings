export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
