/* KC_EJ01
    Crea un programa por el cual se solicite al usuario el radio de un  
    círculo. El programa deberá calcular y mostrar el área.
    Ejemplo
        >>Entrada: 5
        >>Salida: Elradioes78.5
*/

//prompt como entrada de datos
let radio = prompt("¿Radio del circulo?");
//prompt lee como texto pero la función pow asume que es número, no requiere conversión
let area = Math.PI * Math.pow(radio, 2);
//resultado redondeado
alert('El area del circulo es ' + Math.round(area));