'use strict';
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en
// el primero almacena los números pares y en el segundo los impares,
// Ej, miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arrayNums = undefined) => {
  if (arrayNums === undefined) return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  for (const num of arrayNums) {
    if (typeof num !== 'number') return console.log('No es un array de numeros valido');
  }

  return console.log({
    pares: arrayNums.filter((num) => num % 2 === 0),
    impares: arrayNums.filter((num) => num % 2 === 1),
  });
};

separarParesImpares();
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
separarParesImpares([2, 4]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, true]);
