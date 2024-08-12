// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numarray: number[];
let stringArray: Array<string>;
//* 2. Create a tuple person that holds a string (name) and a number (age).
let person: [name: string,age: number];
//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
let colors: ReadonlyArray<string>;
type ReadOnlyTuple = readonly[x:number, y:number];
let point: ReadOnlyTuple = [4,3];
point = [3,2];
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum StatusEnum{
    Active,
    Inactive,
    Pending
}
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: 1,
    Inactive: 2,
    Pending: 3
} as const;