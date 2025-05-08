// This file demonstrates different types of loops in JavaScript
// Run `node loops.js` in your terminal to see output

// Standard for loop
console.log("Standard for loop:");
for (let i = 0; i < 5; i++) {
  console.log("i is currently", i);
}

// While loop
console.log("\nWhile loop:");
let counter = 5;
while (counter > 0) {
  console.log("counter is currently", counter);
  counter--;
}

// Do while loop (always executes at least once)
console.log("\nDo-while loop:");
let j = 0;
do {
  console.log("j is currently", j);
  j++;
} while (j < 3);

// For...in loop (for iterating over object properties)
console.log("\nFor...in loop (objects):");
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

// For...of loop (for iterating over iterable collections)
console.log("\nFor...of loop (arrays):");
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log("Color:", color);
}

// Array.forEach method (modern approach for arrays)
console.log("\nArray.forEach method:");
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`numbers[${index}] = ${number}`);
});

// Using arrow functions with forEach
console.log("\nForEach with arrow function:");
numbers.forEach((number) => console.log("Number squared:", number * number));

// Breaking out of loops
console.log("\nBreaking out of a loop:");
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("Found 3! Breaking out...");
    break;
  }
  console.log("i =", i);
}

// Skipping iterations with continue
console.log("\nSkipping iterations with continue:");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping 2...");
    continue;
  }
  console.log("i =", i);
}

// Nested loops
console.log("\nNested loops:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// Loop with array methods (map)
console.log("\nArray.map method:");
const doubled = numbers.map((num) => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

// Loop with array methods (filter)
console.log("\nArray.filter method:");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers only:", evenNumbers);

// Infinite loop (commented out for safety)
/* 
console.log("\nInfinite loop - DANGER!");
while (true) {
    console.log("This would run forever!");
    // Need a break condition or ctrl+c to stop
}
*/

// Loop with a label (for controlled breaking)
console.log("\nLabeled loops:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking out of both loops at i=1, j=1");
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}
