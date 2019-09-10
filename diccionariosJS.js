let miDiccionario = {
    clave1: 100,
    clave2: 3.14,
    key: 'Hola'
};


function getKeys (dict) {
    let aux = [];

    for (let key in dict) {
        aux.push(key);        
    }
    return aux
}

console.log('Mi metodo->', getKeys(miDiccionario))

//ECMA 6 para recorrer las claves de un diccionario
console.log(Object.keys(miDiccionario));

Object.keys(miDiccionario).forEach(function(item){
    console.log(miDiccionario[item]);
});

//Misma funcion de arriba
Object.keys(miDiccionario).forEach(item => console.log(miDiccionario[item]));


//Ejemlo Doble de cada elemeno de la lista
let miLista = [1,2,3];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i] * 2)
}

// Con arrowFunction
miLista.forEach(i => console.log(i *2))






