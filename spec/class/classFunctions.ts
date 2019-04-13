import { ClassFunctionNames, ClassFunctions } from "../../types/class/onlyFunctions";
import { AreSame } from "../../types/object/same";

class TestClass {
  propA: string;
  propB: string;
  test1: () => void;
  test2: () => boolean;
  private readonly test3: () => string;
}

interface ExpectedType {
  test1: () => void;
  test2: () => boolean;
}

// $ExpectType "test1" | "test2"
type TestFunctionNames = ClassFunctionNames<TestClass>;
type TestFunctions = ClassFunctions<TestClass>;

// $ExpectType true
type Test2 = AreSame<TestFunctions, ExpectedType>;
