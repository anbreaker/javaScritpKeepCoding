'use strict';
// 12) Programa una función que determine si un número es primo
// (aquel que solo es divisible por sí mismo y 1) o no, Ej, miFuncion(7) devolverá true.

const primo = (num = undefined) => {
  if (num === undefined) return console.log('No entraste un Nº');
  if (typeof num !== 'number' || num <= 1)
    return console.log('No ingresaste un numero valido');

  let divisible = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`${num} no es Primo`)
    : console.log(`${num} Sí es Primo`);
};

primo(5);
primo(4);
primo(19);
primo('a');
primo(-1);
primo(0);
primo(121);
