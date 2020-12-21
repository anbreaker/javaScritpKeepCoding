'use strict';
// 20) Programa una función que valide que un texto sea un email válido,
// Ej, miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
  if (!email) return console.log('No ingresaste un email.');
  if (typeof email !== 'string') return console.log(`El valor ${email}, NO es un texto`);

  let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );

  return regex
    ? console.log(`Email valido ${email}`)
    : console.log(`Email No valido ${email}`);
};

validarEmail();
validarEmail(34);
validarEmail('antunez @gmail.com');
validarEmail('antunez19@gmail.com');
