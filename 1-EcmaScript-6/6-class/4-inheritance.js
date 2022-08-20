class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngines() {
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
  }

  info() {
    console.log(`Nomor Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`);
  }
}

class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    // "super" is used for accessing properties and methods in parent class
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu!`);
  }

  //  overriding method info dari parent class
  info() {
    // using "super" to get methods from parent class
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

class Motorcycle extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    // "super" is used for accessing properties and methods in parent class
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }

  //  overriding method info dari parent class
  info() {
    // using "super" to get methods from parent class
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

// const myCar = new Car("H121S", "Honda", 4);
// myCar.startEngines();
// myCar.info();

class VehicleFactory {
  // static method is a method that can only be called using its own class
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(
        `Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
      );
    });
  }
}

const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);

// Membuat instance untuk memanggil fungsi repair
// const vehicleFactory = new VehicleFactory();
// vehicleFactory.repair([johnCar, tomMotor, dimasCar]);

// Pemanggilan method repair langsung dari class-nya
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);
