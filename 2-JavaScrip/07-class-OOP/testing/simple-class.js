class Student {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
  get getCheck() {
    if (this.score >= 90) {
      return "Grade A";
    } else if (this.score >= 80) {
      return "Grade B";
    } else if (this.score >= 70) {
      return "Grade C";
    } else if (this.score >= 60) {
      return "Grade D";
    } else if (this.score >= 50) {
      return "Grade E";
    } else {
      return `Grade F = ${false}`;
    }
  }
}

let result = new Student(1, "Sothea", 60);

console.log(result.getCheck);
// console.log(result);
