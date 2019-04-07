import { Cast } from "../../types/helpers/cast";
import { Length } from "../../types/tupple/length";
import { Drop } from "../../types/tupple/drop";
import {Params} from "../../types/function/params";

type Curry<P extends any[], R> = <T extends any[]>(
  ...args: Cast<T, Partial<P>>
) => Drop<Length<T>, P> extends [any, ...any[]] ? Curry<Cast<Drop<Length<T>, P>, any[]>, R> : R;

declare function curry<T extends (...a: any[]) => any>(fnc: T): Curry<Params<T>, ReturnType<T>>;

declare function test(arg1: string, arg2: number);

curry(test)("")();
