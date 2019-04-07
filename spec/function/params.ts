import { Params } from "../../types/function/params";

declare function testReturnType<T extends (...args: any[]) => any>(fnc: T): Params<T>;
declare function testFunc1(arg1: number): any;
declare function testFunc2(): any;
declare function testFunc3(arg1: string, arg2: number): any;

testReturnType(testFunc1); // $ExpectType [number]
testReturnType(testFunc2); // $ExpectType []
testReturnType(testFunc3); // $ExpectType [string, number]
