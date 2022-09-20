// Ejercicio 1
(function ejercicio1() {
  const frutas = ['manzana', 'pera', 'plátano', 'uvas', 'piña', 'naranja'];

  // Devolver un string con la primera coincidencia de piña
  // Completar
  const x = frutas.find((item) => item === 'piña');

  console.log(x);
  // piña
})();

// Ejercicio 2
(function ejercicio2() {
  function creaTabla(x) {
    return function (y) {
      return x * y;
    };
  }

  const por5 = creaTabla(5);
  const por10 = creaTabla(10);

  console.log(por5(2)); // muestra 10
  console.log(por10(2)); // muestra 20
})();

// Ejercicio 3
(function ejercicio3() {
  const frutas = ['manzana', 'pera', 'plátano', 'uvas', 'piña', 'naranja'];

  // Devolver un array con el número de caracteres por elemento
  // Completar

  const x = frutas.map((item) => item.length);

  console.log(x);
})();
// [7, 4, 7, 4, 4, 7]

// Ejercicio 4
(function ejercicio4() {
  const frutas = ['manzana', 'pera', 'plátano', 'uvas', 'piña', 'piña', 'naranja'];

  // Devolver un array con los elementos que contengan 'o'
  // Completar

  const x = frutas.filter((item) => item.includes('o'));

  console.log(x);

  // [ 'plátano' ]
})();

// Ejercicio 5
(function ejercicio3() {
  const frutas = ['manzana', 'pera', 'plátano', 'uvas', 'piña', 'naranja'];

  // Devolver un array con los elementos dados la vuelta (con el mismo orden)
  // Completar

  const x = frutas.map((item) => item.split('').reverse().join(''));

  console.log(x);

  // [ 'anaznam', 'arep', 'onatálp', 'savu', 'añip', 'ajnaran' ]
})();
