//Numero de inicio, Numero de fin y Numero de cuanto en cuanto.
// [1,2,3,4] -> range (1,4,1)
// [2,4,6,8,10] -> range (2,10,2)
// [10,8,6,4,2] -> range (10,2,-2)

function range(start,end,step=1){
    let lista = []

    if (step > 0){
        for (let i = start; i <= end; i += step){
            lista.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step){
            lista.push(i)
        }
    }
    
    return lista;
}

console.log(range(1,4,1))
console.log(range(10,2,-1))


//Sumar todos los elementos de un array
// [1,2,3] -> 6
array = [1,2,3]
function sum(array){
    let result = 0;

    for (let i = 0; i < array.length; i++){
        result += array[i]
    }
    return result
}

console.log(sum(array))
console.log(sum(range (2,10,2)))

//Filtrar la salida de un array a solo numeros:
// [1,2,3,'a',5,'j'] -> [1,2,3,5]
arrayPrueba = [1,2,3,'a',5,'j']
function filterNumbers(array){
    let result = []
    for (let i = 0; i <= array.length; i++){
        if (typeof array[i] === 'number'){
            result.push(array[i])
        }
    }
    return result
}

console.log(filterNumbers(arrayPrueba))
console.log(sum(filterNumbers(arrayPrueba)))

//Funcion que compruebe cuantos datos repetidos existen en un array
//[1,2,2,3,4,1] -> {1:2, 2:2, 3:1, 4:1}

arrayCountNumbers = [1,2,2,3,4,1,8,6,4]

function countNumbers(array){
    let result = {};
    
    for (let i = 0; i < array.length; i++){
        //Los diccionarios en javascript tiene una metodo para comprobar si Existe (tiene propiedad propia)
        if (result.hasOwnProperty(arrayCountNumbers[i]) !== true){
            result[array[i]] = 0
        }
        result[array[i]] += 1

    }
    
    return result
}

console.log(countNumbers(arrayCountNumbers))