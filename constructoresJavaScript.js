// Ejemplos de constructores

function Jugador(nombre, posicion){
    this.nombre = nombre;
    this.posicion = posicion;

    // getter
    this.getInfo = function () {
        return `Mi nombre es ${this.nombre} y juego de ${this.posicion}`;
    }
}

let soyUnJugador = new Jugador('Ronaldo', 'delantero');

console.log(soyUnJugador)


function Persona(nombre, apellido, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;

    // getter
    this.getInfo = function() {
        return `Me llamo ${this.nombre} ${this.apellido} y vivo en la calle ${this.direccion}`
    }

    this.getDireccion = function (numero){
        return `Vivo en la calle ${this.direccion} en el numero ${numero}`
    }
}

let persona1 = new Persona('Javie','Antúnez','Gabino Tejado')

console.log(persona1.getInfo())
console.log(persona1.getDireccion(44))