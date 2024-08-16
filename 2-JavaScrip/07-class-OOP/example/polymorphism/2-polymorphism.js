class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    // super.speak();
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}
const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Output:
// Animal makes a sound
// Dog barks
// Cat meows
