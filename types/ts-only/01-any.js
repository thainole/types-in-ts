"use strict";
// let something = 123; // tipo: number
// Si le asignamos el tipo any:
let something = 13;
something = true;
something = undefined;
something = 'Hello';
console.log(something.includes('l'));
// type assertion: se usa para especificar un tipo, y así conocer sus propiedades y métodos
// noImplicitAny: al estar en true, nos obliga a tipar cualquier variable (sino, dará error)
