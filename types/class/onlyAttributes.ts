export type ClassAttributeNames<T> = {
  [K in keyof T]: T[K] extends (args: any) => any ? never : K
}[keyof T];

export type ClassAttributes<T> = Pick<T, ClassAttributeNames<T>>;
