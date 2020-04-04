// Coerción
// Hay dos tipos de coerciones: Implícitas y Explícitas.

// Ejemplo de coerción Implícita
let a = 4 + "7";
console.log(a + " --> " + typeof a); // Concatenación.

let b = 4 * "7";
console.log(b + " --> " + typeof b); // Multiplicación.

// Ejemplo de coerción Explícita
let n1 = 20; // número
let s1 = n1 + ""; // cadena

let s2 = String(n1); // cadena
console.log(s2 + " --> " + typeof s2); // Coerción Explícita.

let n2 = Number(s1); // número
console.log(n2 + " --> " + typeof n2); // Coerción Explícita.
