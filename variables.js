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
let myNameVariable = 'Me';
myNameVariable = "You";
console.log(myNameVariable);