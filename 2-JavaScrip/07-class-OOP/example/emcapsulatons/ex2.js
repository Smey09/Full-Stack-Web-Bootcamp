class Car {
  #model;
  #year;

  constructor(model, year) {
    this.#model = model;
    this.#year = year;
  }

  getModel() {
    return this.#model;
  }

  getYear() {
    return this.#year;
  }
}

let myCar = new Car("Honda", 2024);
console.log(myCar.getModel()); // Honda
console.log(myCar.getYear()); // 2024
