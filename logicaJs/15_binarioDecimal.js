'use strict';
// 15) Programa una función para convertir números de base binaria a decimal y viceversa,
// Ej, miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (num = undefined, base = undefined) => {
  if (num === undefined)
    return console.log('Introduce un valor numerico para convertir.');
  if (typeof num !== 'number')
    return console.log(`El valor ${num} no es un valor valido `);
  if (base === undefined)
    return console.log('Introduce un valor numerico para convertir.');
  if (typeof base !== 'number')
    return console.log(`El valor ${base} no es un valor valido `);

  if (base === 2) {
    return console.log(
      `El numero binario ${num} en base ${base} es ${parseInt(num, base)} base10.`
    );
  } else if (base === 10) {
    return console.log(
      `El numero binario ${num} en base ${base} es ${num.toString(base)} base2.`
    );
  } else {
    return console.log('El tipo de base que pasas no esta admitido');
  }
};

convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
