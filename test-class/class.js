//create a object from a class

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // to add mehods
    greet(){
        return `Hello , I'm ${this.name}`
    }
}

// const p1 = new Person("Ephraim",25);
// console.log(p1)

// console.log(p1.greet())

/**
 * ****************************Heritage****************
 * 
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some sound";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

const d1 = new Dog("Rex");
console.log(d1.makeSound());
console.log(d1.bark());
