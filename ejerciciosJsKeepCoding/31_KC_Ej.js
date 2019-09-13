/*KC_EJ31
Crear una clase Alumno con los siguientes atributos:
    >> numero_matricula, nombre, apellido, email, estatus_inscrito.
       La matrícula deberá ser numérica, mientras que correo_electronico, nombre
       y apellido como textos. El atributo estatus_inscrito deberá ser un valor booleano.
*/

//Funcion constructor

class Alumno (matricula,nombre,apellidos,email,estatusInscrito) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.apellidos = apellidos;
    this.email = email;
    this.estatus_inscrito = false;
    
    this.getMatricula = function () {
        return this.matricula;
    }    
    this.getNombre = function () {
        return this.nombre;
    }
    this.getApellidos = function () {
        return this.apellidos;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.getEstatusInscrito = function () {
        return this.estatusInscrito;
    }
    this.getInfo = function(){
        return `${this.nombre} ${this.edad}`
    }
}

// matricula(Number),nombre(String),apellidos(String),email(String),estatusInscrito(boolean)

let Sergio = new Persona(1,'Sergio','Tardio', 'sergio@gmail.com', true)
let Pablo = new Persona(2,'Pablo', 'Escobar', 'gaviria@gmail.com', false)
let Simao = new Persona(3,'Simao', 'Espor', 'simao@gmail.com', true)
let Javier = new Persona(4,'Javier', 'Antunez', 'javier@gmail.com', false)
let Jessica = new Persona (5,'Jessica', 'Neves', 'jessica@gmail.com', true)

let infoPersonas = [Javier,Jessica,Sergio,Pablo,Simao]