// Sintaxis: { key: value }

// IN JS

/* const dog = {
  name: 'Bobby',
  age: 5
};

dog.color = brown

dog.height // da undefined porque no existe

*/

// IN TS

const dog = {
  name: 'Gringa',
  age: 5,
};

console.log(dog.name);
// dog.color = 'white'; // ERROR: color no es una propiedad de 'dog'
// dog.age = 'five'; // ERROR: el tipo de edad es number, no string
