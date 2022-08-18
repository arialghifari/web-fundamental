const user = {
  firstName: "Dimas",
  lastName: "Saputra",
  age: 18,
};

const admin = {
  name: "Jane",
  position: "Marketing",
};

const message =
  "Dear, " +
  user.firstName +
  " " +
  user.lastName +
  "\n\n" +
  "Selamat ulang tahun yang ke-" +
  user.age +
  " semoga selalu diberikan kesehatan." +
  "\n\n" +
  "Best Regars, \n" +
  admin.name +
  "\n" +
  admin.position;

console.log(message);
