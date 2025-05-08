// Objects in JavaScript - a collection of properties and methods
// Run `node objects.js` in your terminal to see output

// Basic object creation
const aNewObjectBasedOnAPerson = {
  name: "Josh",
  favoriteColor: "black",
  id: 13242143,
  hobbies: ["Coding", "Writing", "Fishing"],
};

// Accessing object properties
console.log("Name:", aNewObjectBasedOnAPerson.name);
console.log("ID:", aNewObjectBasedOnAPerson["id"]); // Bracket notation

// Destructuring, use the object key as the variable name inside of curly braces and then assign to object you are destructuring
const { hobbies } = aNewObjectBasedOnAPerson;
// You can also destructure and name indices in an array, use the curly braces followed by the index you want to pull from the array then colon then the name of the variable you want to use for that index.
const { 0: firstHobby } = hobbies;
console.log("First hobby:", firstHobby);

// Multiple property destructuring
const { name, favoriteColor } = aNewObjectBasedOnAPerson;
console.log("Destructured properties:", name, favoriteColor);

// Destructuring with renaming
const { name: personName, id: personId } = aNewObjectBasedOnAPerson;
console.log("Renamed properties:", personName, personId);

// Object with methods
const calculator = {
  result: 0,
  add: function (a, b) {
    this.result = a + b;
    return this.result;
  },
  // Shorthand method syntax
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  },
};

console.log("\nObject with methods:");
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(10, 4));

// Object constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
  this.start = function () {
    this.isRunning = true;
    return `${this.make} ${this.model} is now running`;
  };
}

console.log("\nObject constructor function:");
const myCar = new Car("Toyota", "Corolla", 2020);
console.log("Car object:", myCar);
console.log(myCar.start());

// ES6 Class syntax (syntactic sugar over constructor functions)
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log("\nClasses in JavaScript:");
const myBook = new Book("1984", "George Orwell", 1949);
console.log(myBook.getSummary());

// Nested objects
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Innovation Lane",
    city: "San Francisco",
    state: "CA",
  },
  employees: [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
  ],
};

console.log("\nNested objects:");
console.log("Company address:", company.address.city);
console.log("First employee:", company.employees[0].name);

// Object methods
const person = { name: "John", age: 30 };
console.log("\nObject methods:");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Shallow copy with Object.assign
const originalObj = { a: 1, b: 2 };
const copiedObj = Object.assign({}, originalObj);
copiedObj.a = 999;
console.log("\nShallow copy:");
console.log("Original:", originalObj);
console.log("Copy:", copiedObj);

// Spread operator for object copying
const spreadCopy = { ...originalObj };
console.log("\nSpread operator copy:", spreadCopy);

// Object property shorthand
const x = 10,
  y = 20;
const point = { x, y }; // Same as { x: x, y: y }
console.log("\nProperty shorthand:", point);

// Computed property names
const propertyName = "dynamicKey";
const dynamicObject = {
  [propertyName]: "This key was created dynamically",
};
console.log("\nComputed property:", dynamicObject);

// Optional chaining
const user = {
  details: {
    // address is missing
  },
};
console.log("\nOptional chaining:", user?.details?.address?.street); // undefined instead of error

// Object.freeze and Object.seal
const frozenObj = Object.freeze({ prop: 42 });
// frozenObj.prop = 100; // This would fail in strict mode
console.log("\nFrozen object:", frozenObj);

// Property descriptors
const descriptorObj = {};
Object.defineProperty(descriptorObj, "readOnly", {
  value: "You cannot change me!",
  writable: false,
  enumerable: true,
});
console.log("\nProperty descriptor:", descriptorObj.readOnly);
