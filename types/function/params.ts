export type Params<F extends Function> = F extends (...args: infer U) => any ? U : never;
