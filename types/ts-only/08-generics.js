"use strict";
// Creando una función para transformar un array de números
function mapNumbers(input, transform) {
    const newArray = [];
    input.forEach((x) => {
        newArray.push(transform(x));
    });
    return newArray;
}
const numList = [1, 2, 3];
const numTransformed = mapNumbers(numList, (x) => x * 2);
console.log(numTransformed);
// Creando una función para transformar un array de letras
function mapLetters(input, transform) {
    const newArray = [];
    input.forEach((x) => {
        newArray.push(transform(x));
    });
    return newArray;
}
const lettersList = ['a', 'b', 'c'];
const lettersTransformed = mapLetters(lettersList, (x) => x.toUpperCase());
console.log(lettersTransformed);
// Podríamos optar por narrowing (verificar el tipo de parámetros) para no crear tantas funciones,
// ...pero no siempre es lo ideal.
// SOLUCIÓN: Generics
function map(input, transform) {
    const newArray = [];
    input.forEach((x) => {
        newArray.push(transform(x));
    });
    return newArray;
}
console.log(map(lettersList, (x) => x.toUpperCase()));
console.log(map(numList, (x) => x * 2));
