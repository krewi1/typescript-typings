import { HasTail, Tail } from "./tail";
import { Head } from "./head";

export type Last<T extends any[]> = {
  0: Last<Tail<T>>;
  1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];
