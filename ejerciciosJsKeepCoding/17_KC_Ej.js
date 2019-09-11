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
let infoPersonas = [Pedro,Pablo,Bob]

function comenzar(){
    let nombre = prompt('Dime un nombre:')
    buscarEmail(nombre);
}

function buscarEmail(nombre){
    for (let p = 0; p <= infoPersonas.length; p++) {
        
        if(infoPersonas[p].getNombre() === nombre){
            console.log('Dentro del if', infoPersonas[p]);
            nombre.getEmail();
        }else{
            console.log('El nombre no existe en la lista');
            comenzar();
        }        
    }
}

comenzar();