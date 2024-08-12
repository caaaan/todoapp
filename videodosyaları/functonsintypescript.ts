/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name:string): string {
    return `hello ${name}`;
}
//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.
type product = {
    id: number;
    name: string;
}

function getProduct(id:number): product{
    return {id:id, name:"product"};
}
//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.
type calculator = (a:number,b: number) => number;

let add: calculator = (a:number,b:number) => a + b;
let subtract: calculator = (a:number,b:number) => a - b;
//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

function logMessage(msg:string): void {
    console.log(msg);
}


function throwError(msg:string): never {
    throw Error(msg);
}