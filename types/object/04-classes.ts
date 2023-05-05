// En JS

/* class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  // Método
  get personalInformation () {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const person = new Person('Thais', 25);

console.log(person.personalInformation);*/

// En TS
class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // constructor (public name: string, public age: number) {}

  // Método
  get personalInformation() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

class Artist extends Person {
  private type: string;

  constructor(name: string, age: number, type: string) {
    super(name, age);
    this.type = type;
  }

  get personalInformation() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old and I'm a(n) ${this.type}.`;
  }
}

const myArtist = new Artist('Alex Turner', 37, 'singer');
console.log(myArtist.personalInformation);
