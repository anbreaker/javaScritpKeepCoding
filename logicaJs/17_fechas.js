'use strict';
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
// Ej, miFuncion(new Date(1985,11,19)) devolverá 35 años (en 2020).

const years = (date = undefined) => {
  if (date === undefined) return console.log('No ingresaste una fecha');
  if (!(date instanceof Date))
    return console.log('El valor ingresado no es una fecha valida');

  let hoyMenosFecha = new Date().getTime() - date.getTime();
  let yearMs = 1000 * 60 * 60 * 24 * 365;

  let yearPasado = Math.floor(hoyMenosFecha / yearMs);

  return Math.sign(yearPasado) === -1
    ? console.log(`Faltan ${Math.abs(yearPasado)} años para el ${date.getFullYear()}`)
    : Math.sign(yearPasado) === 1
    ? console.log(`Han Pasado ${Math.abs(yearPasado)} años desde ${date.getFullYear()}`)
    : console.log(`Estamos en el año actual ${date.getFullYear()}`);
};

years();
years({});
years(new Date());
years(new Date(1985, 11, 19));
years(new Date(2085, 11, 19));
