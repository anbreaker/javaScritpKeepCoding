'use strict';
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
// Ej, miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = '', patron = '') => {
  !texto
    ? console.log('No pusiste texto')
    : !patron
    ? console.log('No pusiste el patron')
    : console.log(texto.replace(new RegExp(patron, 'ig'), ''));
};

eliminarCaracteres();
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
eliminarCaracteres('Lorem Ipsum is simply dummy text of the printing', 'o');
