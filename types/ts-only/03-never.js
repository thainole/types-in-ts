"use strict";
// Aquí, la función lanza un error o excepción, o termina la ejecución
const alwaysThrowError = (mensaje) => {
    throw new Error(mensaje);
};
alwaysThrowError('Never');
// Aquí never aparece porque TS determina que ya no queda nada más del union type
const functionWithDifferentTypes = (x) => {
    if (typeof x === 'string') {
        console.log(x, ' es de tipo string');
    }
    else if (typeof x === 'number') {
        console.log(x, ' es de tipo number');
    }
    else {
        // tipo 'never'!
        console.log(x, ' es de tipo never');
    }
};
