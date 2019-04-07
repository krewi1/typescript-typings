import { Length, TupleWithLength, SameLength } from "../../types/tupple/length";

// $ExpectType 3
type Test1 = Length<[string, number, boolean]>;

// $ExpectType true
type Test2 = SameLength<[number, boolean], [string, undefined]>;

// $ExpectType false
type Test3 = SameLength<[number], [string, undefined]>;

// $ExpectType [string, string, string, string]
type Test4 = TupleWithLength<4, string>;
