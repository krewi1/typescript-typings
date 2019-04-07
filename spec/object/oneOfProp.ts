import { OneOfProp } from "../../types/object/oneOfProp";

interface ToTest {
  a: string;
  b: string;
  c: string;
  d: string;
}

type Test1 = OneOfProp<ToTest, "c" | "d">;

// $ExpectError
const t: Test1 = {
  a: "",
  b: "",
  c: "",
  d: "",
};
