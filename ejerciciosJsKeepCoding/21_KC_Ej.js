/*KC_EJ21
Crear un programa que reciba un número natural entero y muestre su
tabla de multiplicar del 1 al 10.
    Ejemplo
        >> Entrada: 5
        >> Salida:
            5x1=5
            5x2=10
            5x3=15
            5x4=20
            5x5=25
            5x6=30
            5x7=35
            5x8=40
            5x9=45
            5x10=50
*/

let num = 5;

function tablaDelNum(num) {
    let multiplicar = [];

    for (let i = 1; i <= 10; i++) {
        multiplicar += num * i;
        document.write(`${num} x ${i} = ${num * i}; <br>`, );
    }

}

tablaDelNum(num);
