const user = {
  firstName: "Dimas",
  lastName: "Saputra",
  age: 18,
};

const admin = {
  name: "Jane",
  position: "Marketing",
};

const message = `Dear, ${user.firstName} ${user.lastName}

"Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.

Best Regars,
${admin.name} 
${admin.position}`;

console.log(message);
