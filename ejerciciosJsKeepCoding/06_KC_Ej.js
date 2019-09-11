/*KC_EJ06
Crea un programa que solicite dos números y muestre los resultados
de aplicar comparaciones relacionales.
    Ejemplo
        >> Entradas 30 y 2
        >> Salida:
        30 < 2 = False
        30 > 2 = True
        30 y 2 son iguales = False
        30 y 2 son distintos = True
*/

function comparacionesRelacionales(num1, num2){
    console.log(num1 < num2)
    console.log(num1 > num2)
    console.log(num1 === num2)
    console.log(num1 !== num2)
}

console.log(comparacionesRelacionales(30,2))