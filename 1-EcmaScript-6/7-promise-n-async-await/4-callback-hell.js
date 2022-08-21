const gatheringIngredients = (rawIngridient, callback) => {
  console.log("Menyiapkan bahan ....");
  setTimeout(() => {
    if (rawIngridient) {
      const ingridient = `Bahan ${rawIngridient} sudah siap!`;
      callback(ingridient);
    }
  }, 1000);
};

const makeTheDough = (ingridient, callback) => {
  console.log("Membuat adonan ....");
  setTimeout(() => {
    if (ingridient) {
      const dough = "Adonan Selesai!";
      callback(dough);
    }
  }, 2000);
};

const pourDough = (dough, callback) => {
  console.log("Menyiapkan adonan ke cetakan .....");
  setTimeout(() => {
    const pouredDough = "Cetakan Adonan Selesai!";
    callback(pouredDough);
  }, 1000);
};

const bakeACake = (pouredDough, callback) => {
  console.log("Memanggang kue ....");
  setTimeout(() => {
    const cake = "Kue sudah siap!";
    callback(cake);
  }, 3000);
};

// callback hell terjadi di sini!
const makeACake = (...rawIngredients) =>
  gatheringIngredients(rawIngredients, (ingridients) =>
    makeTheDough(ingridients, (dough) =>
      pourDough(dough, (pouredDough) =>
        bakeACake(pouredDough, (cake) => console.log(cake))
      )
    )
  );

makeACake("Sugar", "Milk", "Butter");
