// Regular function
/* const upperizedNames = ["Dimas", "Widy", "Buchori"].map(function (name) {
  return name.toUpperCase();
}); */

// Arrow function
/* const upperizedNames = ["Dimas", "Widy", "Buchori"].map((name) =>
  name.toUpperCase()
);
console.log(...upperizedNames); */

// REGULAR function declaration
/* function sayHello(greet) {
  console.log(`${greet}!`);
} */
// REGULAR function expression
/* const sayName = function (name) {
  console.log(`Nama saya ${name}`);
}; */

// ARROW function expression
/* const sayHello = (greet) => console.log(`${greet}!`);
const sayName = (name) => console.log(`Nama saya ${name}`); */

// Example of using arrow function
// 1. Stored in variable
// const sayName = name => console.log(`Nama saya ${name}`);

// 2. Passed as an argument
// ['Dimas', 'Widy', 'Buchori'].forEach(name => console.log(`Nama saya ${name}`));

// 3. Stored in object property
const user = {
  introduce: (name) => console.log(`Nama saya ${name}`),
};
const { introduce } = user;
introduce("Ari");
