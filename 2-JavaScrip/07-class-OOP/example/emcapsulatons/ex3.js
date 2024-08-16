const database = [
  { id: 1, name: "Smey", score: 60 },
  { id: 2, name: "Sothea", score: 70 },
  { id: 3, name: "Ching", score: 80 },
  { id: 4, name: "Pheak", score: 90 },
];

class Student {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  // Getter for checkScore
  get checkScore() {
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

  // Static method to find a student by name
  static findStudentByName(name) {
    const studentData = database.find(
      (student) => student.name.toLowerCase() === name
    );
    if (studentData) {
      return new Student(studentData.id, studentData.name, studentData.score);
    } else {
      console.log(`Student with name ${name} not found`);
      return null;
    }
  }
}

let student = Student.findStudentByName("smey");

if (student) {
  console.log(student.checkScore); // Outputs: Grade C
} else {
  console.log("Student not found");
}


