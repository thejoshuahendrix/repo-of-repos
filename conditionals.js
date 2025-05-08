// This is a base JavaScript file meant to teach the basics of vanilla JavaScript using node.
// Run `node variables.js` in your terminal to see output of file

// Variables are where we store data. Variables can be one of several different types.

// Like Numbers, we define a variable in javascript using the let keyword followed by the name of the variable followed by its assignment
// Here we assign it to 2
let variable = 2;

console.log(variable);

variable = 5;

console.log(variable);

// Or text also called strings, here we define a constant using 'const', meaning we can't reassign the variable to a new value.
const thisIsAConstant = "UNCHANGABLE TEXT";
// Even though this is a constant and we can't reassign it, we can use string methods to change the variable anyway by creating a new constant.
const newConstant = thisIsAConstant.toLowerCase();

console.log(thisIsAConstant, newConstant);

// 'let' is what we use when we want to be able to reassign a value to the variable.
let myNameVariable = "Me";
myNameVariable = "You";
console.log(myNameVariable);

// ----- MORE VARIABLE EXAMPLES -----

// 1. Different primitive data types
let numberVar = 42; // Number
let stringVar = "Hello world"; // String
let booleanVar = true; // Boolean
let undefinedVar; // Undefined (declared but not assigned)
let nullVar = null; // Null (explicitly set to no value)
let bigIntVar = 9007199254740991n; // BigInt (for very large integers)
let symbolVar = Symbol("unique"); // Symbol (unique and immutable)

console.log("Number:", numberVar);
console.log("String:", stringVar);
console.log("Boolean:", booleanVar);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("BigInt:", bigIntVar);
console.log("Symbol:", symbolVar);

// 2. 'var' - the original variable declaration (function scoped, older style)
var oldSchoolVar = "I'm function scoped";
{
  var oldSchoolVar = "I leaked outside my block!";
}
console.log(oldSchoolVar); // "I leaked outside my block!"

// 3. Block scope demonstration with 'let'
let outsideBlock = "Outside";
{
  let insideBlock = "Inside";
  console.log(outsideBlock); // "Outside" (accessible)
  console.log(insideBlock); // "Inside" (accessible)
}
console.log(outsideBlock); // "Outside" (accessible)
// console.log(insideBlock); // Error! Not accessible outside its block

// 4. Variable hoisting demonstration
console.log("Before declaration:", hoistedVar); // undefined (not an error)
var hoistedVar = "I was hoisted";
console.log("After declaration:", hoistedVar); // "I was hoisted"

// 5. Type conversion
let num = 10;
let str = "20";
let sum = num + str; // JavaScript converts num to a string and concatenates
console.log("10 + '20' =", sum); // "1020"

// Converting between types
console.log("String to number:", parseInt(str));
console.log("Number to string:", num.toString());
console.log("Boolean to number:", Number(true)); // 1

// 6. Template literals (string interpolation)
let name = "JavaScript";
let age = 26;
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting);
