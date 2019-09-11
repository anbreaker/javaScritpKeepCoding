/*KC_EJ14
Crear un programa que reciba un texto y muestre su longitud
    Ejemplo
        >> Entrada: Hola mundo
        >> Salida: Longitud 10
*/

let texto = prompt("Escribe un Texto: ");

function longitudTextoIntroducido(texto) {
    let longitud = texto.length
    document.write(`Entrada de texto "${texto}" con Longitud -> ${longitud}`);
}


longitudTextoIntroducido(texto)
