function Car(model, year) {
  let carModel = model;
  let carYear = year;

  this.getModel = function () {
    return carModel;
  };

  this.getYear = function () {
    return carYear;
  };
}

let myCar = new Car("BMW", 2024);
console.log(myCar.getModel()); // BMW
console.log(myCar.getYear()); // 2024

console.log("Hello");
