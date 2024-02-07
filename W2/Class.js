//Plain Old Objects , use factories to mass produce objects with the same thing
const carFactory = function (make, years, miles) {
  return {
    make: make,
    yrsOld: years,
    mileage: miles,
    info: function () {
      return `this ${this.make}`;
    },
  };
};

const cars = [
  carFactory("toyota", 10, 20000),
  carFactory("ford", 3, 234000),
  carFactory("subaru", 30, 534000),
];

//Class - blue print -> to create object (intance)
class Car {
  constructor(make1, model, color) {
    this.make = make1;
    this.model = model;
    this.color = color;
    this.hammerStick = "new engine";
  }

  //method
  start() {
    this.isRunning = true;
    console.log("Running!");
  }

  toString() {
    return `this car is a ${this.color} ${this.model}`;
  }

  //static method
  static about() {
    console.log("I'm the Car class!");
  }
}

class ElectricCar extends Car {
  constructor(make, model, color, batteryCharge2) {
    super(make, model, color);
    this.batteryCharge = batteryCharge2;
  }
}

const myCar = new Car("subra", "crosstreck", "red");
myCar.start();
console.log(myCar.toString());

console.log(myCar);

const myVolvo = new ElectricCar("Volvo", "EX30", "Gray", 100);
console.log(myVolvo);
