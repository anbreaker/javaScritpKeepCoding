/*KC_EJ02
Crea un programa que solicite dos números y muestre los resultados
de todas sus operaciones aritméticas.
    Ejemplo
    >>Entradas: 30 y 2
    >>Salida: 30+2= 32
              30-2=28
              30x2=60
              30/2=15
              30**2=900
              30%2=0
*/

function operacionesAritmeticas(num1, num2){
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 ** num2)
    console.log(num1 % num2)
}

console.log(operacionesAritmeticas(30,2))