"use strict";
// sintaxis: const variableName:dataType[] = [];
const myNameInLetters = ['t', 'h', 'a', 'i', 's'];
// const myNameInLetters: string[] = ['t', 'h', 'a', 'i', 5] // ERROR: Es un array únicamente de strings
// TS infiere que es un arreglo de tipo number
const myNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(myNumbers));
