export type Tail<T extends any[]> = ((..._: T) => any) extends ((_: any, ...args: infer TT) => any)
  ? TT
  : never;

export type HasTail<T> = T extends ([] | [any]) ? false : true;
