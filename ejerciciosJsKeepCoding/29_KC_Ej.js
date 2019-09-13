/*KC_EJ29
Modificar el programa KC_EJ24 (promedio de alumnos) de forma tal que el cálculo del promedio se
realice a través de una función.
    KC_EJ24
    Modificar el programa KC_EJ23 para que muestre los resultados ordenados por la media, de forma
    descendente.
        Ejemplo
            >>Entradas:
                Pedro 6, 8, 7
                Pablo 9, 9, 10
                Bob 10, 10, 10
                terminar
            >>Salida:
                Bob 10
                Pablo 9
                Pedro 7
*/

//Funcion constructor

function Persona (nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;

    this.getNombre = function () {
        return `${this.nombre}`
    }

    this.getNota = function () {
        return `${this.nota}`
    }
    this.getInfo = function(){
        return `${this.nombre} ${this.nota}`
    }
}

//Pedro 25, Pablo 17, Bob 35, Patricio 27, Betty 20, Pebbles 2 ...

function Persona (nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;

    this.getNombre = function () {
        return `${this.nombre}`
    }

    this.getNota = function () {
        return `${this.nota}`
    }
    this.getInfo = function(){
        return `${this.nombre} ${this.nota}`
    }
}


let jay = new Persona('jay', [8,5,6])
let pablo = new Persona('Pablo', [6,5,7])
let joao = new Persona('João', [6,5,5])
let bob = new Persona('Bob', [7,5,6])
let jess = new Persona ('Jessica', [8,9,7])

let listaPersonas = [jay,pablo,joao,jess,bob]

function calcularMedia(jay) {
    media = 0
    for (i = 0; i < jay.getNota().length; i++) {
        console.log(i);

            media += jay.getnota[i]

    }
    console.log(media);
}