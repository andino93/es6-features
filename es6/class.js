class Animal {
  constructor(name, sound, type) {
    this.name = name;
    this.sound = sound;
    this.type = type;
  }
  makeSound() {
    return `The ${this.type} named ${this.name} goes ${this.sound}!`;
  }
}

const ted = new Animal('Teddy', 'woof woof', 'dog');
console.log(ted.name);
console.log(ted.type);
console.log(ted.makeSound());

/*
  Instead of passing in parameters to make a dog each time we want a dog Animal, we can extend
  the Anaimal class to create a subclass that is a Dog.
*/

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof woof', 'dog');
  }
}

const peggy = new Dog('Peggy')
console.log(peggy.name);
console.log(peggy.type);
console.log(peggy.makeSound());

/*
  We could also extend the Dog class to include different types of dogs if we wanted to
*/

class Husky extends Dog {
  constructor(name) {
    super(name);
    this.breed = 'husky';
  }
  iAm() {
    // here we can still use the properties that were found the Animal class we inherited from
    return `My name is ${this.name} and I am a ${this.breed}! ${this.sound}!!`
  }
}

const simba = new Husky('Simba');
console.log(simba.name);
console.log(simba.type);
console.log(simba.makeSound());
console.log(simba.iAm());
