'use strict';
// 19) Programa una función que valide que un texto sea un nombre válido,
// Ej, miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = '') => {
  if (!nombre) return console.log('No ingresaste un nombre.');
  if (typeof nombre !== 'string')
    return console.log(`El valor ${nombre}, NO es un texto`);

  let regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  return regex
    ? console.log(`Nombre valido ${nombre}`)
    : console.log(`Nombre No valido ${nombre}`);
};

validarNombre();
validarNombre(3);
validarNombre('Franscio Javier');
