const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu ....");

  setTimeout(() => {
    cake = "Kue Selesai!";
    callback(cake);
  }, 3000);
};

getCake((cake) => {
  console.log(cake);
});
