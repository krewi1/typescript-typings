export type ReturnType<F extends Function> = F extends (...args: any[]) => infer U ? U : never;
