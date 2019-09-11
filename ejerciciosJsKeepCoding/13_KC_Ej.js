/* KC_EJ13
Crear un programa que contenga una lista de 20 números y muestre
un rango de la lista. El inicio y fin del rango serán introducidos por el
usuario y el programa deberá validar que sean valores válidos.
        Ejemplo 1 (entrada no válida)
            >>Valores: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
            >>Entradas: 11 y 23
            >>Salida: El rango debe ser de 1 a 20
        Ejemplo 2 (entrada válida)
            >>Valores: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
            >>Entrada: 11 y 15
            >>Salida: 12, 13, 14, 15.
*/

let listaNum = new Array();
for (let i = 0; i < 20; i++ ){
    listaNum[i] = i + 1
}

let inicio = parseInt(prompt('Inicio Rango: '));
let final = parseInt(prompt('Final Rango: '));

if(!isNaN(inicio) && !isNaN(final)){
    let rango = Math.abs(inicio - final);
    document.write(`El rango es de: ${rango + 1} Posiciones `);
    for (let i = inicio; i <= final; i++) {
        document.write((listaNum[i] - 1) + ' ')
    }
}
