// Two params
// const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);
// sayHello("Dimas", "Selamat Pagi");

// No params
// const sayHello = () => console.log("Selamat pagi semuanya!");
// // or
// const sayHello2 = _ => console.log("Selamat pagi semuanya!");
// sayHello2();

// More than 1 line arrow function
/* const sayHello = (language) => {
  if (language.toUpperCase() === "INDONESIA") {
    return "Selamat Pagi!";
  } else {
    return "Good Morning!";
  }
};

console.log(sayHello("Indonesia")); */

// "This" keyword in arrow function
function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// Regular menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//   // this -> People
//   setTimeout(function () {
//     // this -> ??
//     console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
//     console.log(`Hobby saya adalah ${this.hobby}`);
//   }, 300);
// };

// Arrow
// People.prototype.introMyself = function () {
//   // this -> People
//   setTimeout(() => {
//     // this -> People
//     console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
//     console.log(`Hobby saya adalah ${this.hobby}`);
//   }, 300);
// };

// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMyself();

// Default Parameters
// Regular Function
// function sayHello(name = "Stranger", greet = "Hello") {
//   console.log(`${greet} ${name}!`);
// }

// sayHello("Dimas", "Hai");
// sayHello();

// Arrow Function
const sayHello = (name = "Stranger", greet = "Hello") =>
  console.log(`${greet} ${name}!`);

sayHello("Dimas", "Hai");
sayHello();
