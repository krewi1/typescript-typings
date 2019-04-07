import { Prepend } from "./prepend";

export type Length<T extends any[]> = T["length"];

export type SameLength<T1 extends any[], T2 extends any[]> = Length<T1> extends Length<T2>
  ? true
  : false;

export type TupleWithLength<N extends number, T2, I extends any[] = []> = {
  0: TupleWithLength<N, T2, Prepend<T2, I>>;
  1: I;
}[Length<I> extends N ? 1 : 0];
