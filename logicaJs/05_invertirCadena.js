'use strict';
// 5) Programa una función que invierta las palabras de una cadena de texto,
// Ej, miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertir = (cadena = '') =>
  !cadena
    ? console.log('No hay cadena')
    : console.log(cadena.split('').reverse().join(''));

invertir('Hola');
invertir();
