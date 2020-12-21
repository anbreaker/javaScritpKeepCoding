'use strict';
// 26) Programa una función que dado un arreglo de números obtenga el promedio,
// Ej, promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arrayNums = undefined) => {
  if (arrayNums === undefined) return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  let promedio = 0;
  for (const num of arrayNums) {
    if (typeof num !== 'number') return console.log('No es un array de numeros valido');

    // promedio += num;
  }

  // return console.log(promedio / arrayNums.length);

  // usando Reduce
  arrayNums.reduce((total, num, index) => {
    total += num;
    if (index === arrayNums.length - 1) {
      return console.log(
        `Promedio de los elementos ${arrayNums.join('+')} = ${total / arrayNums.length}`
      );
    } else {
      return total;
    }
  });
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
