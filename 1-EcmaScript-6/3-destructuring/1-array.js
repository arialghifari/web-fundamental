const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// Old way
/* const myFood = favorites[0];
const yourFood = favorites[1];
const ourFood = favorites[2]; */

// Destructuring way
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// const [, , thirdFood] = favorites;

// Destructuring Assignment
/* let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood, herFood); */

// Default Values
/* const [firstFood, secondFood, thirdFood, fourthFood, myFood = "Ice cream"] =
  favorites; */

// Swap values
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);
