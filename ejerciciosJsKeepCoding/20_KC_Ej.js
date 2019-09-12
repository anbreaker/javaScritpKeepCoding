/*KC_EJ20
Crear un programa que escriba la suma de los números del 1 a N,
donde N será dado por el usuario.
    Ejemplo
        >> Entrada: 8
        >> Salida: 1+2+3+4+5+6+7+8 = 36
*/

let num = 8;

function sumaDeN(num){
    let sum = [];
    let acumulado = 0
    for (let i = 1; i <= num; i++) {
        acumulado += i
        sum += i + " + "
    }

    //Metodo slice para eliminar parte del finla de una cadena
    console.log(`${sum.slice(0,-2)} = ${acumulado}`);
    document.write(`${sum.slice(0,-2)} = ${acumulado}`);
}

sumaDeN(num)
