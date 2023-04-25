const doSomething = (tuple: [string, number, boolean?]) => {
  const a = tuple[0];
  console.log('tipo de a: ', typeof a); // string

  const b = tuple[1];
  console.log('tipo de b: ', typeof b); // number

  const c = tuple[2];
  console.log('tipo de c: ', typeof c); // boolean | undefined
};

doSomething(['Taylor', 13, false]);

// Desestructurando tuplas
const setProduct = (product: [string, number]) => {
  const [productId, productPrice] = product;
  console.log(typeof productId, typeof productPrice);
  console.log(`El precio de ${productId} es de ${productPrice} soles.`);
};

setProduct(['lentejitas', 2.5]);
// setProduct([2.5', 'lentejitas']); // ERROR: la posición del elemento importa en las tuplas
// setProduct(['lentejitas', 'abc']); // ERROR, a menos que fuera [string, string]
