const aNewObjectBasedOnAPerson = {
  name: "Josh",
  favoriteColor: "black",
  id: 13242143,
  hobbies: ["Coding", "Writing", "Fishing"],
};

// Destructuring, use the object key as the variable name inside of curly braces and then assign to object you are destructuring
const { hobbies } = aNewObjectBasedOnAPerson;
// You can also destructure and name indicies in an array, use the curly braces followed by the index you want to pull from the array then colon then the name of the variable you want to use for that index.
const { 0: firstHobby } = hobbies;
console.log(firstHobby);
