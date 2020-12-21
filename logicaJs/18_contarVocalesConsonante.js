'use strict';
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// Ej, miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = '') => {
  if (!cadena || typeof cadena !== 'string') return console.log('No ingresates texto');

  let vocales = 0;
  let consonantes = 0;

  cadena = cadena.toLowerCase();

  for (let letra of cadena) {
    if (/[aeiou]/.test(letra)) vocales++;
  }

  for (let letra of cadena) {
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.log({cadena, vocales, consonantes});
};

contarLetras();
contarLetras('Hola Mundo');
contarLetras(3);
