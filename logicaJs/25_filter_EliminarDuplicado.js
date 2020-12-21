'use strict';
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// Ej, miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arrayNums = undefined) => {
  if (arrayNums === undefined || arrayNums.length <= 1)
    return console.log('No ingresaste un array de numeros');
  if (!(arrayNums instanceof Array) || arrayNums.length === 0)
    return console.log('No ingresaste un array de numeros Válido');

  return console.log(
    {
      ArrayOriginal: arrayNums,
      sinDuplicar: arrayNums.filter((item, index) => {
        return arrayNums.indexOf(item) === index;
      }),
    },
    '\n'
  );
};

eliminarDuplicados(['x', 10, 'x', 2, '10', 10, true, true]);

// Usando Filter
const data = [1, 2, 6, 1, 2, 5, 9, '33', '33'];

const resultFilter = data.filter((item, index) => {
  return data.indexOf(item) === index;
});
console.log(resultFilter, 'Usando Filter'); //[1,2,6,5,9,'33']

// Usando Set
const dataArr = new Set(data);
let resultSet = [...dataArr];
console.log(resultSet, 'Usando Set'); //[1,2,6,5,9,'33']

// Usando Reduce
const resultReduce = data.reduce((acumulador, item) => {
  if (!acumulador.includes(item)) {
    acumulador.push(item);
  }
  return acumulador;
}, []);

console.log(resultReduce, 'Usando Reduce'); //[1,2,6,5,9,'33']

// Usando forEach
const result = [];
data.forEach((item) => {
  //pushes only unique element
  if (!result.includes(item)) {
    result.push(item);
  }
});
console.log(result, 'Usando forEach'); //[1,2,6,5,9,'33']
