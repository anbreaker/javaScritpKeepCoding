/*KC_EJ22
Crear un programa que reciba los nombres y edades de 10 personas.
Mostrar únicamente los nombres de las personas que tienen derecho
a votar (mayores a 18 años).
    Ejemplo
        >> Entradas: Pedro 23, Bob 15, Patricio 7, Pablo 30, Betty 20,
        Pebbles 2 ...
        >> Salida: Tienen derecho al voto Pedro, Pablo y Betty.
*/

//Funcion constructor

function Persona (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.getNombre = function () {
        return `${this.nombre}`
    }

    this.getEdad = function () {
        return `${this.edad}`
    }
    this.getInfo = function(){
        return `${this.nombre} ${this.edad}`
    }
}

//Pedro 25, Pablo 17, Bob 35, Patricio 27, Betty 20, Pebbles 2 ...

let Pedro = new Persona('Pedro', 25)
let Pablo = new Persona('Pablo', 17)
let Joao = new Persona('João', 4)
let Bob = new Persona('Bob', 35)
let Jessica = new Persona ('Jessica', 26)

let infoPersonas = [Bob,Jessica,Pedro,Pablo]
let conDerechoVoto = []
let nombre = 'Jessica'

function derechoVotar (infoPersonas){
    document.write("Tienen derecho a voto: <br>")
    for (let key = 0; key < infoPersonas.length; key++) {

        if (infoPersonas[key].getEdad() >= 18){
            conDerechoVoto.push(infoPersonas[key].getNombre())
            document.write(`${conDerechoVoto[key]} <br>`)
        }
    }
}
derechoVotar(infoPersonas)