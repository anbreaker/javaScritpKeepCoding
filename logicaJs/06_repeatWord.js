'use strict';
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
// Ej, miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repeatWord = (text = '', word = '') => {
  if (!text) return console.warn('No entraste texto');
  if (!word) return console.warn('No entraste la palabra a buscar repetida');

  let index = 0;
  let contador = 0;
  while (index !== -1) {
    index = text.indexOf(word, index);

    if (index !== -1) {
      index++;
      contador++;
    }
  }

  return console.log(`La palabra ${word}, se repite, ${contador} veces`);
};

repeatWord('El gato negro se encondia el arbol negro', 'negro');
repeatWord('negro');
