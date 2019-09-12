/*KC_EJ25
Crear un programa que contenga un número aleatorio del 1 al 100, sin mostrarlo, y permitir que el
usuario intente adivinarlo. El usuario solamente tendrá 5 oportunidades, en cada oportunidad fallida se le
darán pistas para saber si debe intentar con un número mayor o menor.
    Ejemplo
        >> Número a adivinar: 32
            • Entrada: 10
            • Salida: Intenta con un número mayor (te quedan 4 oportunidades)
            • Entrada: 40
            • Salida: Intenta con un número menor (te quedan 3 oportunidades)
            • Entrada: 35
            • Salida: Intenta con un número menor (te quedan 2 oportunidades)
            • Entrada: 32
            • Salida: ¡Bien, has adivinado! :D
*/

let numRandom = parseInt(Math.random() * 100);
console.log(numRandom);

function adivinaNum(numRandom) {
    for (let intentos = 5; intentos > 0; intentos--) {
        let inputNumber = parseInt(
            prompt("Trata de adivinar el numero, Oportunidades ---> " + intentos)
        );

        if (numRandom === inputNumber) {
            alert(`Has acertado: ${numRandom} == ${inputNumber} Nº intentos ${intentos}`);
            break;
        } else {
            if (numRandom > inputNumber) {
                alert(`El numero ${inputNumber} es MENOR Prueba Oportunidades --> ${intentos}`);
            } else {
                alert(`El numero ${inputNumber} es MAYOR Prueba NºIntentos -> ${intentos}`);
            }
        }
    }
}

adivinaNum(numRandom);
