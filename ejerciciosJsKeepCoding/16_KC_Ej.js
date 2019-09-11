/*KC_EJ16
Crear un programa que contenga una Lista de nombres. Solicitar un
índice de la lista y mostrar el valor del índice. El programa deberá
validar que el índice es válido.
Ejemplo
    >> Lista predeterminada: 
    "Homer Simpson", "Master Splinter", "Anakin Skywalker", "Padmé Amidala"
    >> Entrada: 2
    >> Salida: Anakin Skywalker
*/

let listaNombres = ["Homer Simpson", "Master Splinter", "Anakin Skywalker", "Padmé Amidala"];

let posicionListaNombres = parseInt(prompt("Posicion Lista Nombres: "));

if (!isNaN(posicionListaNombres) && posicionListaNombres <= listaNombres.length){
    document.write(`Posicion de entrada: ${posicionListaNombres} ${listaNombres[posicionListaNombres]}`)
} else {
    let numPosiciones = listaNombres.length
    posicionListaNombres = parseInt(prompt("Introduce un Numero entre1 y -> " + numPosiciones));
    document.write(`Posicion de entrada: ${posicionListaNombres} ${listaNombres[posicionListaNombres]}`)
}