// Class
class Car {
  // Create constructor
  // constructor method is used to set the initial value that sent to the constructor
  constructor(manufacture, color) {
    // "this" in a class is referring to the instance of class
    // so that "this" can be used to manage property in the instance
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }

  // Method
  // Sama seperti Car.prototype.startEngine
  startEngines() {
    console.log("Mobil dinyalakan...");
    this.enginesActive = true;
  }

  // Method
  // Sama seperti car.prototype.info
  info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color: ${this.color}`);
    console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
  }
}

// Instance of Car or Object
// instance is an object that has those methods and properties
// that has been initialize from its classes
const johnCar = new Car("Tesla", "Red");
const rickCar = new Car("Lamborghini", "Yellow");
// Running method
johnCar.startEngines();
johnCar.info();

rickCar.info();
