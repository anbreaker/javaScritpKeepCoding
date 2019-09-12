/*KC_EJ17
Crear un programa que contenga un diccionario con nombres y
correos electrónicos. Solicitar el nombre de una persona y mostrar su
correo electrónico. Indicar con un mensaje apropiado cuando no se
encuentre un resultado válido.
    Ejemplo
        Diccionario predeterminado:
            >>Pedro - pedro.picapiedra@gmail.com
            >>Pablo - pmarmol123@gmail.com
            >>Bob - bob@gmail.com
            >>Entrada: Pablo
            >>Salida: pmarmol123@gmail.com
*/            

//Funcion constructor

function Persona (nombre, email) {
    this.nombre = nombre;
    this.email = email;

    this.getNombre = function () {
        return `${this.nombre}`
    }

    this.getEmail = function () {
        return `${this.email}`
    }
    this.getInfo = function(){
        return `${this.nombre} ${this.email}`
    }
}

let Pedro = new Persona('Pedro', 'pedro.picapiedra@gmail.com')
let Pablo = new Persona('Pablo', 'pmarmol123@gmail.com')
let Bob = new Persona('Bob', 'bob@gmail.com')
let infoPersonas = [Bob,Pedro,Pablo]

function comenzar(){
    let nombre = prompt('Dime un nombre:')
    //let nombre = 'Pablo'
    buscarEmail(nombre);
}

function buscarEmail(nombre){
    for (let p = 0; p < infoPersonas.length; p++) {

        if(infoPersonas[p].getNombre() === nombre){
            console.log('Dentro del if', infoPersonas[p]);
            document.write(infoPersonas[p].getEmail())
            return;
        //Es esta condicon de debajo la que tambien me estaba llevando a errores.
        }else if (infoPersonas[p] == infoPersonas.length){
            document.write('El nombre no existe en la lista ')
        }        
    }
    comenzar();
}

comenzar();


//Bucle de Mechas que me abrio los ojos!

// function buscarEmail(nombre) {
//     let ok = false;
//     infoPersonas.forEach(function(element) {
//         if (element.getNombre() === nombre) {
//             console.log("Dentro del if", element);
//             element.getEmail();
//             ok = true;
//             document.write(element.getEmail());
//             return;
//         }
//     });
//     if (!ok) {
//         console.log("El nombre " + nombre + " no existe en la lista");
//         document.write("El nombre " + nombre + " no existe en la lista");
//         comenzar();
//     }
// }

