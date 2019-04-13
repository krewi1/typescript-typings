export type ClassFunctionNames<T> = {
  [K in keyof T]: T[K] extends (args: any) => any ? K : never
}[keyof T];

export type ClassFunctions<T> = Pick<T, ClassFunctionNames<T>>;
