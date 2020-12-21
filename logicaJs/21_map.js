'use strict';
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
// Ej, mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const double = (arrayNums = undefined) => {
  if (arrayNums === undefined) return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  for (const num of arrayNums) {
    if (typeof num !== 'number') return console.log('No es un array de numeros valido');
  }

  const double = arrayNums.map((item) => item ** 2);
  return console.log(`Array de numero inicial ${arrayNums}, array al cuadrado ${double}`);
};

double();
double([1, 4, 5]);
double(3);
double({});
double([5, 6, 'j']);
