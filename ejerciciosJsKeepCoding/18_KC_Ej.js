/*KC_EJ18
Crear un programa que muestre los números naturales del 1 al N,
donde N será dado por el usuario.
    Ejemplo
        >> Entrada: 8
        >> Salida: 1, 2, 3, 4, 5, 6, 7, 8   
*/

numEntrada = 8;

function mostrarNumNaturales(valor){
    let mensaje= ''
    for (let i = 1; i <= valor; i++) {
        mensaje += i 
    }
  console.log(mensaje)
}
mostrarNumNaturales(numEntrada)
