/*KC_EJ27
Crear un programa que contenga una función es_palindromo(texto) y determine si dicho texto es un
palíndromo.
    Ejemplo
        >>Entrada: anita lava la tina
        >>Salida: El texto ingresado ES palíndromo
*/

//let frase = "sometamos o matemos";
let frase = toLowerCase(prompt("Escribe frase"));
fraseSinEspacios = frase.replace(/ /g, "") //Elimino espacios en blanco
fraseInversa = fraseSinEspacios.split('').reverse().join('') //Doy vuelta frase

function esPalindromo(frase) {
    for (i = 0; i < frase.length; i++) {
        if (fraseSinEspacios === fraseInversa) {
            document.write("Es palindromo");
            return true;
        } else {
            document.write("No Es palindromo");
            return false;
        }
    }
}

esPalindromo(frase)