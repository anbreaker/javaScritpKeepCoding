function helloWorld(){
    console.log('hello World')
    console.log('1')
  }
  
helloWorld()

function soyUnaFuncion () {
    return 'soyUnaFuncion';
}

soyUnaFuncion();

let soyUnaFuncionAnonima = function () {
    return 'soyUnaFuncionAnonima'
}


soyUnaFuncionAnonima();

function helloWorld(){
console.log('hello World')
console.log('1')
}

helloWorld()

function soyUnaFuncion () {
    console.log('soyUnaFuncion')
}

soyUnaFuncion();

let soyUnaFuncionAnonima = function () {
    console.log('soyUnaFuncionAnonima')
}

// Funcion de una sola linea 
let arrowFunctionUnaSalida = (a,b) => a + b
console.log(arrowFunctionUnaSalida(7,8))

// Funcion arrow con mas de una linea
let arrowFunctionMasSalidas = (a,b) => {
    let resultado = a + b;
    return resultado;
}
console.log(arrowFunctionMasSalidas(7,8))



soyUnaFuncionAnonima();

function recibiendoParametrosMultiples(...parametros) {
    console.log(parametros)
}

recibiendoParametrosMultiples('Hola', ' Mundo ', ' esto es ', ' javaScript')

