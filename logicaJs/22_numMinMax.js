'use strict';
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
// Ej, miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arrayNums = undefined) => {
  if (arrayNums === undefined) return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  for (const num of arrayNums) {
    if (typeof num !== 'number') return console.log('No es un array de numeros valido');
  }

  return console.log(
    `Array Original ${arrayNums} \n\tValor Mayor ${Math.max(
      ...arrayNums
    )} \n\tValor Menor ${Math.min(...arrayNums)}`
  );
};

arrayMinMax();
arrayMinMax([]);
arrayMinMax([1, 4, 5, 99, -60]);
arrayMinMax([1, 4, 5, 99, true]);
