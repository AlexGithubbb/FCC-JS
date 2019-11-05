// ---------------------------- Instantiation  ----------------------------

// step1 : create a class
class Person {
  // step2: create a constructor
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  // create own-style method
  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
  }
}

class sayGoodBye extends Person {
  constructor(name, type, date) {
    super(name, type);
    this.date = date;
  }
  say() {
    console.log(`Nice to meet you ${this.name}, I'll see you on ${this.date}`);
  }
}

const person1 = new Person('Bob', 'DA');
const sayGoodBye1 = new sayGoodBye('Alex', 'DA', 'Monday');
// Person.cook = function() {
//   console.log(`${this.name} can cook beef`);
// };

// console.log(Person);
// Bob.introduce();
// Bob.sayGoodBye();
// console.log(`${person1.name} is a ${person1.type}`);
console.log(person1);
console.log(sayGoodBye1);

person1.introduce();
sayGoodBye1.say();
//
//
// ---------------------------- Classical Inheritance  ----------------------------
//
// const Person = function(name, type) {
//   this.name = name;
//   this.type = type;
// };

// Person.prototype.introduce = function() {
//   console.log(`Hi, My name is ${this.name}, and I'm a ${this.type}`);
// };

// const person1 = new Person('Alex', 'UI developer');
// // console.log(person1);
// person1.introduce();
// person1.play = function() {
//   console.log(`Weeeeee, I'm a ${this.type}`);
// };

// console.log(person1);
// person1.play();
