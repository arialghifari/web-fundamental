import { coffeeStock as stock, isCoffeeMakerReady } from "./state.js";

const makeCoffee = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 20);
