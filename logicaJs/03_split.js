'use strict';
// 3) Dado un String devuelva un Array de textos separados por cierto caracter.
// Ej, miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const cadenaToString = (cadena = '', separator = undefined) =>
  !cadena
    ? console.warn('No pusiste texto')
    : separator === undefined
    ? console.warn('No pusiste un separador')
    : console.info(`${cadena.split(separator)}`);

cadenaToString('lorem ipsum dolor sit', ' ');
cadenaToString('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dec', ',');
cadenaToString('-');
cadenaToString('Hola Mundo', '-');
