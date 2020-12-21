'use strict';
// 4) Función que repita un texto X veces.
// Ej, miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (text = '', rep = undefined) => {
  if (!text) return console.warn('No entraste texto');
  if (rep === undefined) return console.warn('No entraste el Nº de repeticiones');
  if (rep === 0) return console.error('No se puede repetir 0 veces Error');
  if (Math.sign(rep) === -1)
    return console.error('El Nº de veces no puede ser Negativo Error');

  for (let i = 0; i < rep; i++) {
    console.log(`${text}, ${i + 1}ª vez`);
  }
};

repeatText('Hola Mundo', 3);
repeatText('Hola Mundo', 0);
repeatText('Hola Mundo', -1);
repeatText('', -1);
repeatText('Hola mundo');
