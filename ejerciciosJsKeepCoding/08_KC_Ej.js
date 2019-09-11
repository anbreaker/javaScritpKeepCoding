/* KC_EJ08
Crear un programa que reciba un número entero y muestre:
    Si es Par o Impar, 
    Positivo, Negativo o cero.
    Ejemplo:
        >> Entrada: 23
        >> Salida: Positivo impar.
*/

function parImparPosNeg(num) {
    if (num === 0) {
        return `El numero es ${num}`;
    } else if (num > 0) {
        //ver si  par o impar
        if (num % 2 === 0) {
            return `El numero es ${num} Positivo y Par`;
        } else {
            return `El numero es ${num} Positio e Impar`;
        }
    } else if (num < 0) {
        //ver si  par o impar
        if (num % 2 === 0) {
            return `El numero es ${num} Positio y Par`;
        } else {
            return `El numero es ${num} Negativo e Impar`;
        }
    }
}

console.log(parImparPosNeg(8));
console.log(parImparPosNeg(-138));
