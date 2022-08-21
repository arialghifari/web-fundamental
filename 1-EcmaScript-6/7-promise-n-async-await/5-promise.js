const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;

  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

const makeCoffe = new Promise(executorFunction);
console.log(makeCoffe);
