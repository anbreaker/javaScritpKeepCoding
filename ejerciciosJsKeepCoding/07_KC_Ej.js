/*KC_EJ07
Crea un programa que solicite tres notas y calcule su media.Dependiendo del 
valor de la media, mostrará si el resultado es Apto o No Apto.
    Ejemplo
    >> Entradas: 10,8,7
    >> Salida: Apto
*/

function notaMedia(nota1,nota2,nota3){
    let notaMedia = (nota1 + nota2 + nota3) / 3
    if (notaMedia >= 5){
        return `La media es de ${notaMedia} > 5 por tanto Es Apto`
    }else if (notaMedia < 5) {
       return `La media es de ${notaMedia} < 5 por tanto No Apto`
    }
}

console.log(notaMedia(10,8,7));
console.log(notaMedia(10,3,1));