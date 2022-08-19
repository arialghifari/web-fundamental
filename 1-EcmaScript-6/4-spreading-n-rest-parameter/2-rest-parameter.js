// Sum all numbers given
/* function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));
 */

// Array destructuring
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
