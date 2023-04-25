"use strict";
/* UNDEFINED: no tiene aún algún valor */
// const isActive: boolean = undefined;
// ERROR: ya se le asignó un tipo a la variable
// No da error si le quitamos el strictNullChecks:true de tsconfig.json (NO recomendable)
const isActive = undefined; // mejor forma en caso sea necesario
/* NULL: se le asigna un valor nulo */
// Si anulamos la propiedad strictNullChecks de tsconfig.json, no nos dará error.
