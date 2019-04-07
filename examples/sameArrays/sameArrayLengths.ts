import {Cast} from "../../types/helpers/cast";
import {Length, TupleWithLength} from "../../types/tupple/length";

type WithDescription<T extends any[]> = ((...args: T) => any) extends ((...args: infer U) => any) ? (args: Cast<TupleWithLength<Length<U>, string>, any[]>) => boolean : never;