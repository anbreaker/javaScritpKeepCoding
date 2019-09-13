/*KC_EJ23
Crear un programa que reciba el nombre y las calificaciones de N
personas, mientras que el usuario no escriba “terminar”. Al terminar
deberá mostrar la media de calificaciones de cada persona.
    Ejemplo
        >> Entradas:
            Pedro 6, 8, 7
            Pablo 9, 9, 10
            Bob 10, 10, 10
            terminar
        >>Salida:
            Pedro 7
            Pablo 9
            Bob 10
*/

let personas = new Array();

while (true) {
    let nombre = prompt("Nombre persona a agregar ('terminar o t' finaliza): ");
    if (nombre.toLowerCase() === "terminar" || nombre.toLowerCase() == "t") {
        break;
    }
    let media = 0;
    for (i = 0; i < 2; i++) {
        media += parseInt(prompt("Calificacion " + i + " de " + nombre));
    }
    media = media / 2;
    personas.push({ nombre: nombre, media: media });
}

for (i = 0; i < 3; i++) {
    //document.write(personas[i].nombre + " - " +personas[i].media + "<br/>");
    document.write(`${personas[i].nombre} - ${personas[i].media} <br/>`);
}
