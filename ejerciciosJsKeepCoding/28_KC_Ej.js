/*KC_EJ28
Crear un programa que contenga una función pintar_rectangulo(lado, figura). Esta función deberá pintar
en consola un cuadrilátero de lado x lado con la figura proporcionada.
Ejemplo:
    >>Entrada: lado 10, figura +
    >>Salida:
        ++++++++++
        +        +
        +        +
        +        +
        +        +
        +        +
        ++++++++++
*/
let lado = 5;
let figura = 'p'

function pintarCuadrado(lado,figura){
    for (x = 0; x < lado; x++){
        for (y = 0; y < lado; y++){
            if(x === 0 || x === lado - 1 || y === 0 || y === lado - 1){
                document.write(figura);
            }else{
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("<br>")
    }
}

pintarCuadrado(lado,figura)