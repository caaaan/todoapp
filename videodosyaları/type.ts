let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79 as const; //number
let newAge = oldAge; // number
let data = new Map();  // hashmap? array
let score = [90, 86, 100]; // number array
type Primitive = string | number | boolean; //  union type (hem string, number ve boolean)
type CustomName = "John" extends string ? string : "John"; //string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // array

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; //not valid
// score.push(10); // valid
// score.push("New Score"); //not valid
// let customAge: CustomAge = 50; // not valid
// let primitive: Primitive = new Date(); // not valid
// let years: CheckScore = []; //valid