/*KC_EJ04
Crea un programa que solicite tres notas y muestre su media.
    Ejemplo
    >> Entradas: 8, 9 y 6
    >> Salida: La media es 7.6
*/

function notaMedia(nota1,nota2,nota3){
    let notaMedia = (nota1 + nota2 + nota3) / 3
    return notaMedia
}

console.log(notaMedia(5,6,7));