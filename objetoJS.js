let persona = {
    nombre: 'Francisco Javier',
    apellido: 'Antúnez',
    direccion: {
        calle: 'Micasa',
        numero: '127.0.0.1'
    },
    array:[1,2,3]
};

function saludar(){
    return `Hola ${persona.nombre} ${persona.apellido}, encantado.
            Vivo en ${persona.direccion.calle} ${persona.direccion.numero}
            Tengo un array ${persona.array[2]}`
}

console.log(saludar())

// Contar el numero de propiedades que tenga un objeto

let dict = {
    nombre: 'Francisco Javier',
    apellido: 'Antúnez',
    direccion: {
        calle: 'Micasa',
        numero: '127.0.0.1'
    }   
};

function contarPropiedades (){
    let cont = 0
    for (key in dict){
        cont++;
    }
    return cont;
}

console.log(contarPropiedades())

//Crear una funcion que recibiendo dos diccionarios como parametros, nos devuelva
// un unico diccionario con las claves y valores de los dos recibidos.
let dict1 = {
    nombre: 'Francisco Javier'
}
let dict2 = {
    apellido: 'Antúnez',
}

function unirDiccionarios(diccionario1, diccionario2){
    let diccionarioFinal = {};
    for (let key in diccionario1){
        diccionarioFinal[key] = diccionario1[key]
    }
    for (let key in diccionario2){
        diccionarioFinal[key] = diccionario2[key]
    }

    return diccionarioFinal;
}

console.log(unirDiccionarios(dict1,dict2))