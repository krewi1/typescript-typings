import { AreSame } from "../../types/object/same";
import { ClassAttributeNames, ClassAttributes } from "../../types/class/onlyAttributes";

class TestClass {
    propA: string;
    propB: string;
    private readonly propC: string;
    test1: () => void;
    test2: () => boolean;
}

interface ExpectedType {
    propA: string;
    propB: string;
}

// $ExpectType "propA" | "propB"
type TestAttributesNames = ClassAttributeNames<TestClass>;
type TestAttributes = ClassAttributes<TestClass>;

// $ExpectType true
type Test2 = AreSame<TestAttributes, ExpectedType>;
