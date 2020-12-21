'use strict';
// 10) Programa una función que reciba un número y evalúe si es capicúa o no
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (num) => {
  if (!num) return console.log('No ingresaste datos');
  if (typeof num !== 'number') return console.log('No ingresaste un numero');

  num = num.toString();
  let capi = num.split('').reverse().join('');

  return num === capi
    ? console.log(`${num} es Capicua`)
    : console.log(`${num} No es Capicua`);
};

capicua();
capicua(2002);
capicua(2012);
capicua({});
capicua('212.212');
capicua(212.212);
