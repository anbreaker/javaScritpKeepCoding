/*KC_EJ03
Crea un programa que solicite una cantidad en Euros y muestre su equivalente en USD.
    Ejemplo
    >> Entrada: 10.0
    >> Salida: $11,03 USD
*/
//Ejercicio realizado sin control de errores

//Conversor € a $ o $ a € a 11-09-19 (1€ = 1.10$)

function conversor(cantidad,divisa){
    let resultadoConversion = 0
    if (divisa == '$'){
        resultadoConversion = cantidad * 0.91
        return `${cantidad} Dolares son ${resultadoConversion} Euros`
    } else if (divisa == '€'){
        resultadoConversion = cantidad * 1.1
        return `${cantidad} Euros son ${resultadoConversion} Dolares`
    }
    return resultadoConversion
}

console.log(conversor(15,'$'))
console.log(conversor(15,'€'))