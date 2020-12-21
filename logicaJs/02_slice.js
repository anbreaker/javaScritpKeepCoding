'use strict';

// 2) Función que devuelva el texto recortado según el número de caracteres indicados
// Ej. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortado = (texto = '', longitud = undefined) =>
  !texto
    ? console.warn('No pusiste texto')
    : longitud === undefined
    ? console.warn('No pusiste la longitud a recortar')
    : console.info(`${texto.slice(0, longitud)}`);

recortado('Hola mundo', 4);
recortado();
recortado('Hola mundo');
recortado('', 5);
