// Class constructor
function Car(manufacture, color) {
  this.manufacture = manufacture;
  this.color = color;
  this.enginesActive = false;
}

// Method
Car.prototype.startEngines = function () {
  console.log("Mobil dinyalakan...");
  this.enginesActive = true;
};

// Method
Car.prototype.info = function () {
  console.log("Manufacture: " + this.manufacture);
  console.log("Color: " + this.color);
  console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
};

// Create instance of Car / object
var johnCar = new Car("Tesla", "Red");
// Running method / behavior
johnCar.startEngines();
johnCar.info();
