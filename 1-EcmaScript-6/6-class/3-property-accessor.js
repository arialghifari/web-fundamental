class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this._color = color; // code convention, grant access using getter/setter
    this.enginesActive = false;
  }

  get color() {
    return `Warna mobil: ${this._color}`;
  }

  set color(value) {
    console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
    this._color = value;
  }
}

const johnCar = new Car("Honda", "Red");
console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: Red

johnCar.color = "White"; // Mengubah nilai properti color menjadi white
console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: White
