const getCoffee = (seedRequested) => {
  return new Promise((resolve, reject) => {
    const seeds = 100;

    setTimeout(() => {
      if (seedRequested <= seeds) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// using Promise
/* function makeCoffee() {
  getCoffee(200)
    .then((coffee) => {
      console.log(coffee);
    })
    .catch((rejectMessage) => {
      console.log(rejectMessage);
    });
} */

// using Async/Await
async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (error) {
    console.log(error);
  }
}

makeCoffee();
