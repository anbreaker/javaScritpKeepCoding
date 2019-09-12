/* KC_EJ19
Crear un programa que almacene 10 números dados por el usuario y
muestre únicamente los pares.
    Ejemplo
        >> Entrada: 10, 3, 6, 12, 20, 5, 9, 7, 11, 40
        >> Salida: Son pares 10, 6, 12, 20, 40.
*/

let numeros = []
let numerosPares = []
for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 10) + 1
    //Son Pares:
    if (numeros[i] % 2 == 0){
        numerosPares += `${numeros[i]} `;
    }    
}

console.log('Lista de numeros',numeros);
console.log('Numeros pares',numerosPares);