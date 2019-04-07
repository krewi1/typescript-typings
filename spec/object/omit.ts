import { Omit } from "../../types/object/omit";
import { AreSame } from "../../types/object/same";

interface Test {
  test1: string;
  test2: number;
  test3: boolean;
}

interface TestResult {
  test2: number;
  test3: boolean;
}
// $ExpectType Pick<Test, "test2" | "test3">
type Test1 = Omit<Test, "test1">;

// $ExpectType true
type TestRes = AreSame<Test1, TestResult>;

const a: Test1 = {
  test2: 5,
  test3: false,
  // $ExpectError
  test1: "aaa",
};
