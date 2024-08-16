class Main {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
  displayInfo() {
    console.log(`Id: ${this.id}, Name: ${this.name}, Score: ${this.score}`);
  }
  displayMessage() {
    console.log("I love you");
  }
}
class ClassOne extends Main {
  displayInfo() {
    super.displayInfo();
  }
}
class ClassTwo extends Main {
  displayMessage() {
    console.log("ClassTwo------");
    super.displayMessage(); 
  }
}
const user = new ClassOne(1, "oggy", 80);
user.displayInfo(); // Id: 1, Name: oggy, Score: 80
user.displayMessage(); // I love you
