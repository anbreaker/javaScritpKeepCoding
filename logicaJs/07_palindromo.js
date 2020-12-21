'use strict';
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo,
// Ej, mifuncion("Salas") devolverá true.

const palindromo = (text = '') => {
  if (!text) return console.log('Ingresa un texto');

  text = text.toLowerCase().split(' ').join('');
  let reverse = text.split('').reverse().join('').split(' ').join('');

  return text === reverse
    ? console.log(`Si es palindromo`)
    : console.log(`No es palindormo`);
};

palindromo('arroz');
palindromo('salas');
palindromo('Alli va Ramon y no maravilla');
