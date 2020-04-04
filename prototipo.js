//Programacion funcional

let array = [1, 2, 3, 4];
let array2 = [1, 2, 3, 6];

function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

//Programacion ECMA6 con prototype

Array.prototype.sum = function sum() {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
};

console.log("Funcions: ", sum(array)); //Funcion
console.log("Prototype: ", array.sum()); //Prototype
console.log("Prototype: ", array2.sum()); //Prototype
