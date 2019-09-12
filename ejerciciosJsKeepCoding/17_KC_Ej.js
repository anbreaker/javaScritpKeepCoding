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

function Persona(nombre, email) {
    this.nombre = nombre;
    this.email = email;

    this.getNombre = function() {
        return `${this.nombre}`;
    };

    this.getEmail = function() {
        return `${this.email}`;
    };
    this.getInfo = function() {
        return `${this.nombre} ${this.email}`;
    };
}

let Pedro = new Persona("Pedro", "pedro.picapiedra@gmail.com");
let Pablo = new Persona("Pablo", "pmarmol123@gmail.com");
let Bob = new Persona("Bob", "bob@gmail.com");
let infoPersonas = [Pedro, Pablo, Bob];

function comenzar() {
    let nombre = prompt("Dime un nombre:");
    //let nombre = 'Pedro';
    buscarEmail(nombre);
}

function buscarEmail(nombre) {
    let ok = false;
    infoPersonas.forEach(function(element) {
        if (element.getNombre() === nombre) {
            console.log("Dentro del if", element);
            element.getEmail();
            ok = true;
            document.write(element.getEmail());
            return;
        }
    });
    if (!ok) {
        console.log("El nombre " + nombre + " no existe en la lista");
        document.write("El nombre " + nombre + " no existe en la lista");
        comenzar();
    }
}


//Mi Intento de lograrlo...................
/*
function buscarEmail(nombre){
    let ok = false;
    for (let key = 0; key <= infoPersonas.length; key++) {
        
        if(infoPersonas[key].getNombre() === nombre){
            console.log('Dentro del if', key.getEmail());
            let key = true;
            document.write(key.getEmail());
            return key.getEmail();
        }else if (!ok) {
            console.log('El nombre no existe en la lista');
            comenzar();
        }        
    }
}

// function buscarEmail(nombre) {
//     infoPersonas.find(function(element){
//         return element.getEmail == nombre
//     });
// }

*/
comenzar();
