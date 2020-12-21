'use strict';
// 1) Función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function countChracter(cadena = '') {
//   if (!cadena) {
//     console.warn('No enviaste ninguna Cadena');
//   } else {
//     console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
//   }
// }

const countChracter = (cadena = '') =>
  !cadena
    ? console.warn('No enviaste ninguna Cadena')
    : console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

countChracter();
countChracter('hola mundo');
countChracter(4);
