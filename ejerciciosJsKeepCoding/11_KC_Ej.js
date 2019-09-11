/*KC_EJ11
Crear un programa que reciba 3 números e indique cuál es el mayor y el menor.
    Ejemplo
        >> Entradas: 5, 19 y 2
        >> Salida: El mayor es 19, el menor es 2
*/
//Programacion Funcional
function compararNumeros(n1, n2, n3) {
    let mayor = 0;
    let menor = 0;

    if (n1 > n2 && n1 > n3) {
        mayor = n1;
    } else if (n2 > n1 && n2 > n3) {
        mayor = n2;
    } else if (n3 > n1 && n3 > n2) {
        mayor = n3;
    }
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    } else if (n2 < n1 && n2 < n3) {
        menor = n2;
    } else {
        menor = n3;
    }
    return `El Nº mayor es: ${mayor} \n El Nº menor es: ${menor}`;
}

compararNumeros(5, 19, 2);

let num1 = parseInt(prompt("Primer Numero"));
let num2 = parseInt(prompt("Segundo Numero"));
let num3 = parseInt(prompt("Tercer Numero"));

function mayorMenor(num1,num2,num3){
    
    let num = [num1, num2, num3];
    let mayor = 0;
    let menor = 100;
    for (let i = 0; i < num.length; i++) {
        if (mayor <= num[i]) {
            mayor = num[i];
        }
        if (menor >= num[i]) {
            menor = num[i];
        }
    }
    
    document.write(`El Nº mayor es: ${mayor} \n El Nº menor es: ${menor}`);
}

mayorMenor(num1,num2,num3)