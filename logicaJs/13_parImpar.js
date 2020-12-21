'use strict';
// 13) Programa una función que determine si un número es par o impar,
// Ej, miFuncion(29) devolverá Impar.

const parImpar = (num = undefined) => {
  if (num === undefined || typeof num !== 'number')
    return console.log('No entraste un Nº');

  return num % 2 === 0 ? console.log(`${num} es Par`) : console.log(`${num} es Impar`);
};

parImpar(2);
parImpar(3);
parImpar(0);
parImpar(19);
parImpar('a');