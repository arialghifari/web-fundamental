const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// Old way
// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// Object literal
// const { firstName, lastName, age } = profile;

// Destructuring Assignment
/* let firstName = "Dimas";
let lastName = "Anggara";
let age = 20;
// menginisialisasi nilai baru melalui object destruction
({ firstName, lastName, age } = profile); */

// Default Values
// const { firstName, age, isMale = true } = profile;

// Assigning to Different Local Variable Names
const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
  isMale: localIsMale = true,
} = profile;

console.log(localFirstName, localLastName, localAge, localIsMale);
