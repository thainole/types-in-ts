/* NUMBERS */
const statesInTheUS = 50;
const regionsInPeru = 26;
// en caso no sepamos si recibimos string o numero de algún dato que nos manden, podemos usar Number()
// const statesInTheUS = Number("50");

// podemos ver las propiedades de los numeros gracias a TS
console.log(statesInTheUS.toFixed());

if (statesInTheUS < regionsInPeru) {
  console.log('hay más regiones en perú');
} else {
  console.log('hay más estados en eeuu que en peru');
}

// si alguna de las variables no fuera number, TS nos daría error
