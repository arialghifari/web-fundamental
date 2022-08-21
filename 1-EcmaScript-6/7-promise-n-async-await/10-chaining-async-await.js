const state = {
  isCoffeeMakerReady: true,
  seedStocks: {
    arabica: 250,
    robusta: 60,
    liberica: 80,
  },
};

const getSeeds = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type] >= miligrams) {
      state.seedStocks[type] = -miligrams;
      resolve("Biji kopi didapatkan!");
    } else {
      reject("Maaf stock kopi habis!");
    }
  });
};

const makeCoffee = (seeds) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat!");
    } else {
      reject("Maaf mesin tidak dapat digunakan!");
    }
  });
};

const servingToTable = (coffee) => {
  return new Promise((resolve) => {
    resolve("Pesanan kopi sudah selesai!");
  });
};

async function reserveACoffee(type, miligrams) {
  try {
    const seed = await getSeeds(type, miligrams);
    console.log(seed);
    const coffe = await makeCoffee();
    console.log(coffe);
    const result = await servingToTable();
    console.log(result);
  } catch (rejectionReason) {
    console.log(rejectionReason);
  }
}

// Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection
reserveACoffee("liberica", 80);
