/*El algoritmo para calcular la letra del dni es el siguiente :

    El número debe ser entre 0 y 99999999 
    Calcular el resto de la división entera entre 23.
    Según el resultado, de 0 a 22, le corresponderá una letra:
        listaLetras = (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
    Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
    Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let dni = ''
// let numero = 80088197
let numero; 

function calcularLetraDni(numero) {
    while(true){
        numero = (prompt('Introduzca Nº Dni'));

        if (!isNaN(numero)){
            // console.log('Comprobar isNaN ->', !isNaN(numero));
            // Calcular el resto de la división entera entre 23.
            let letra = numero % 23
            letra = letras[letra];
            dni = numero + letra
            console.log(dni);
            alert(dni)
            return;
        } else {
            alert('Debe introducir digitos validos, 0..9');
        }
    }
}

calcularLetraDni(numero);



