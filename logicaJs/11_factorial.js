'use strict';
// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el producto de todos los números
// enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = undefined) => {
  if (num === undefined) return console.log('No entraste un Nº');
  if (typeof num !== 'number' || num <= 0)
    return console.log('No ingresaste un numero valido');

  let factorial = 1;

  for (let i = num; i > 1; i--) {
    factorial *= i;
  }
  return console.log(`El factorial es: ${factorial}`);
};

factorial();
factorial(5);
factorial(3);
factorial('3');
factorial(-1);
