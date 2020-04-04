/* 
Queremos crear un programa para gestionar una agenda de números de teléfono. Para
ello vamos a crear la clase Contacto, donde vamos a guardar el nombre del contacto y
su número de teléfono.
    A continuación vamos a crear una clase Agenda, que va a representar un conjunto de
contactos. Para ello vamos a utilizar un vector. La clase Agenda tendrá los siguientes
métodos:
    - addContacto: Pide por teclado un contacto y lo añade a la agenda.
    - delContacto: Pide un nombre y borra todos los contactos que tengan de ese
nombre.
    - listContacto: Lista todos los contactos.
    - findContacto: Pide una cadena y muestra todos los contactos que comiencen con dicha cadena.
Hacer un programa principal, con un menú que permita gestionar todas las operaciones
de nuestra agenda.
*/


class Contacto{
    constructor(nombreContacto, numeroMovil) {
        this.nombreContacto = nombreContacto;
        this.numeroMovil = numeroMovil;
    }

    //getter
    getNombreContacto = function () {
        return this.nombreContacto;
    }
}

class Agenda{
    constructor(listaContactos){
        this.listaContactos = listaContactos;
    }

    //getter
    getListaContactos = function () {
        this.listaContactos = listaContactos;
    }

    //Metodo para agregar contactos
    setAddContacto = function () {
        this.
    }

}
