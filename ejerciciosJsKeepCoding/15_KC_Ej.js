/*KC_EJ15
Crear un programa que reciba el nombre y las calificaciones de 3
personas. Para cada persona deberá guardar la información en una
tupla. El programa no mostrará resultados de salida.
*/

let tupla = new Array();

for (let i = 0; i < 3; i++) {

    let nombre = prompt("Nombre: " + (i+1));
    let calificacion = prompt("Calificacion: " + (i+1))

    tupla[i]= {"nombre": nombre, "calificacion": calificacion};
}
