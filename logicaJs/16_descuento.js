'use strict';
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
// Ej, miFuncion(1000, 20) devolverá 800.

const descuento = (precio = undefined, descuento = 0) => {
  if (precio === undefined && typeof precio === 'number' && precio > 0)
    return console.log('Debes introducir un precio');

  if (descuento < 0) return console.log('No puede haber descuentos negativos');
  if (typeof descuento !== 'number') return console.log('Introduce un dato numerico > 0');

  return console.log(`${precio} - ${descuento} = ${precio - (precio * descuento) / 100}`);
};

descuento(100, 15);
descuento(100, 'a');
descuento(0);
