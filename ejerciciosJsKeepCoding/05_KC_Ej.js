/*KC_EJ05
Crear un programa que solicite el año y mes de nacimiento de dos
personas, y muestre el resultado de compararlas
    Ejemplo
        >> Entradas:
        mes 1 Enero
        año 1 1980
        mes 2 Febrero
        año 2 1980
        >> Salida: False
*/

function compararFechas(mes1,year1,mes2,year2){
    if (mes1 === mes2 && year1 === year2){
        return true
    }else{
        return false
    }
}
console.log(compararFechas(12,1985,6,1993));
console.log(compararFechas(12,1985,12,1985));