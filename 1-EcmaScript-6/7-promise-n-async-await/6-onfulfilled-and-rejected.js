const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;

  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat!");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

const handlerSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};

const makeCoffe = new Promise(executorFunction);
// makeCoffe.then(handlerSuccess, handlerRejected);
// makeCoffe.then(handlerSuccess).then(null, handlerRejected);
makeCoffe.then(handlerSuccess).catch(handlerRejected);
