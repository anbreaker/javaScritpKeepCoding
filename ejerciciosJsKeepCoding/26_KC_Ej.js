/*KC_EJ26
Crear un programa con una función pintar_fila() que arme las filas de una tabla html. Completar el
programa con la estructura de una tabla e invocando a la función N veces, donde N es un valor
introducido por el usuario.
    Ejemplo
    >> Entrada: 4
    >> Salida:
        <table>
            #ciclo invocando 4 veces a la función pintar_fila()
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            #- - - fin ciclo
        </table>
*/

function pintarFila(numFilas){
    document.write("<table border='1' width='50%'>");
    for (let i = 0; i < numFilas; i++) {
        document.write("<tr><td></td></tr>")
    }
    document.write("</table>")
}

let numFilas = parseInt(prompt("Dame el num de filas: "));
pintarFila(numFilas)