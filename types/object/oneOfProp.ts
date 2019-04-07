import { Omit } from "./omit";

export type OneOfProp<T, K extends keyof T = keyof T> = Omit<T, K> &
  { [I in K]-?: Required<Pick<T, I>> & Partial<Record<Exclude<K, I>, undefined>> }[K];
