class FirstClass {
  add() {
    console.log("First Method");
  }
}

class SecondClass extends FirstClass {
  add() {
    console.log(30 + 40);
  }
}

class ThirdClass extends SecondClass {
  add() {
    console.log("Last Method");
  }
}

let objects = [new FirstClass(), new SecondClass(), new ThirdClass()];
objects.forEach((obj) => obj.add());

// Output:
// First Method
// 70
// Last Method
