/*KC_EJ12
Crear un programa que reciba una letra e indique si es vocal o consonante.
    Ejemplo
        >> Entrada: E
        >> Salida: E es letra vocal
*/

let vocales = "aeiou"

function vocalConsonante(letra){
    if ((isNaN(letra) && vocales.indexOf(letra) != -1)) {
        return `Es la vocal -> ${letra}`;
    } else if (isNaN(letra)){
        return `Es la Consonante -> ${letra}`;
    }
}

vocalConsonante('a')