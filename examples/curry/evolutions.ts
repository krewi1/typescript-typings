import { Params } from "../../types/function/params";
import { Head } from "../../types/tupple/head";
import { HasTail, Tail } from "../../types/tupple/tail";
import { Prepend } from "../../types/tupple/prepend";
import { Length } from "../../types/tupple/length";
import { Drop } from "../../types/tupple/drop";
import { Cast } from "../../types/helpers/cast";

type CurryV0<P extends any[], R> = (
  arg0: Head<P>
) => HasTail<P> extends true ? CurryV0<Tail<P>, R> : R;

type CurryV1<P extends any[], R> = (
  arg0: Head<P>,
  ...rest: Tail<Partial<P>>
) => HasTail<P> extends true ? CurryV1<Tail<P>, R> : R;

type CurryV2<P extends any[], R> = <T extends any[]>(
  ...args: T
) => HasTail<P> extends true ? CurryV2<Tail<T>, R> : R;

type test2 = Drop<2, [number, string, boolean]>;

type CurryV3<P extends any[], R> = <T extends any[]>(
  ...args: T
) => Length<Drop<Length<T>, P>> extends 0 ? R : CurryV3<Drop<Length<T>, P>, R>;

type CurryV4<P extends any[], R> = <T extends any[]>(
  ...args: Cast<T, Partial<P>>
) => Length<Cast<Drop<Length<T>, P>, any[]>> extends 0
  ? R
  : CurryV4<Cast<Drop<Length<T>, P>, any[]>, R>;
