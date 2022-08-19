/* const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// this
console.log(...favorites);
// Equal to
console.log(favorites[0], favorites[1], favorites[2], favorites[3]); */

// Find max number
/* const numbers = [12, 32, 90, 12, 32];
// Equals to
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]);
console.log(Math.max(...numbers)); */

// Combine two arrays
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);
