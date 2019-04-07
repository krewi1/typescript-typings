import { ReturnType } from "../../types/function/returnType";

declare function testReturnType<T extends (...args: any[]) => any>(fnc: T): ReturnType<T>;
declare function testFunc1(): number;
declare function testFunc2(): void;
declare function testFunc3(): [number, boolean];

testReturnType(testFunc1); // $ExpectType number
testReturnType(testFunc2); // $ExpectType void
testReturnType(testFunc3); // $ExpectType [number, boolean]
