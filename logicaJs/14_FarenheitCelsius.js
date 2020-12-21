'use strict';
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
// Ej, miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined || typeof grados !== 'number')
    return console.log('No entraste un Nº');
  if (unidad === undefined) return console.log('No entraste el tipo de temperatura');
  if (typeof unidad !== 'string' || unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.log('No entraste correctamente el tipo C o F');

  if (unidad === 'C') {
    return console.log(`${grados}ºC = ${Math.round(grados * (9 / 5) + 32)}ºF`);
  } else if (unidad === 'F') {
    return console.log(`${grados}ºF = ${Math.round((grados - 32) * (5 / 9))}ºC`);
  }
};

convertirGrados(32, 'F');
convertirGrados(100, 'F');
convertirGrados(100, 'C');
convertirGrados('a');
