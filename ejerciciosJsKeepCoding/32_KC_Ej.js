/*KC_EJ32
Crear una clase Módulo con los siguientes atributos:
    >> Listado_alumnos, fecha_inicio, fecha_fin.
El listado de alumnos deberá ser tipo Lista y contener objetos de tipo Alumno creado en el ejercicio
KC_EJ31.
En la misma clase Módulo deberá implementar métodos para
    >> agregar objetos Alumno a la Lista
    >> buscar un alumno
    >> mostrar todos los alumnos con estatus_inscrito == True.
*/

class Modulo {
    constructor(listadoAlumnos, fechaInicio, fechaFin) {
        this.listadoAlumnos = listadoAlumnos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
