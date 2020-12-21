'use strict';
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
// Ej, miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenAscDesc = (arrayNums = undefined) => {
  if (arrayNums === undefined) return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  for (const num of arrayNums)
    if (typeof num !== 'number') return console.log('No es un array de numeros valido');

  return console.log({
    arrayOriginal: arrayNums,
    Ascendente: arrayNums.map((num) => num).sort(),
    Descendente: arrayNums
      .map((num) => num)
      .sort()
      .reverse(),
  });
};

ordenAscDesc([]);
ordenAscDesc([3, {}]);
ordenAscDesc('Hola');
ordenAscDesc([7, 5, 7, 8, 6]);
