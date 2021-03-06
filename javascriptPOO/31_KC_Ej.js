/*KC_EJ31
Crear una clase Alumno con los siguientes atributos:
    >> numero_matricula, nombre, apellido, email, estatus_inscrito.
       La matrícula deberá ser numérica, mientras que correo_electronico, nombre
       y apellido como textos. El atributo estatus_inscrito deberá ser un valor booleano.
*/

//Funcion constructor

class Alumno {
    constructor(matricula, nombre, apellidos, email, estatusInscrito) {
        this.matricula = matricula || 314;
	this.nombre = nombre;      
        this.apellidos = apellidos;
        this.email = email;
        this.estatusInscrito = estatusInscrito || true;
    }

    getMatricula = function() {
        return this.matricula;
    };
    getNombre = function() { 
        return this.nombre;
    };
    getApellidos = function() {
        return this.apellidos;
    };
    getEmail = function() {
        return this.email;
    };
    getEstatusInscrito = function() {
        return this.estatusInscrito;
    };
    getInfo = function() {
        return `${this.nombre} ${this.edad}`;
    };
}

// matricula(Number),nombre(String),apellidos(String),email(String),estatusInscrito(boolean)

let Sergio = new Alumno(1, "Sergio", "Tardio", "sergio@gmail.com", true);
let Pablo = new Alumno(2, "Pablo", "Escobar", "gaviria@gmail.com", false);
let Simao = new Alumno(3, "Simao", "Espor", "simao@gmail.com", true);
let Javier = new Alumno(4, "Javier", "Antunez", "javier@gmail.com", false);
let Jessica = new Alumno(5, "Jessica", "Neves", "jessica@gmail.com", true);

let infoPersonas = [Javier, Jessica, Sergio, Pablo, Simao];
