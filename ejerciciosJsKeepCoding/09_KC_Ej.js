/* KC_EJ09
Crea un programa que reciba una cantidad, y pregunte si desea
convertirla de Euros a USD o de USD a Euros y muestre el resultado
de la conversión.
    Ejemplo
        Entradas:
            • Cantidad 10.0
            • Opción Euros a USD
            >> Salida: $10.06 USD
//Ejercicio realizado sin control de errores

//Conversor € a $ o $ a € a 11-09-19 (1€ = 1.10$)
*/

const cantidad = parseInt(prompt("Introduce una cantidad"));

let eleccion = parseInt(prompt("1 Cambiar Euros\n" + "2 Cambiar Dolares\n"));

function change(cantidad, divisa){
    let resultadoConversion = 0
    if (divisa == 1){
        resultadoConversion = cantidad * 0.91
        document.write(`${cantidad} Dolares son ${resultadoConversion} Euros`);
    } else if (divisa == 2){
        resultadoConversion = cantidad * 1.1
        document.write(`${cantidad} Euros son ${resultadoConversion} Dolares`);
    }
    return resultadoConversion
}

change(cantidad,eleccion)

