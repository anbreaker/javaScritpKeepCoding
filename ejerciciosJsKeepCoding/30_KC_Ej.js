/*KC_EJ30
Crear un programa que simule una máquina expendedora de gaseosas con las siguientes características:
    • Las bebidas disponibles son: Kas, Pepsi, 7Up.
    • Todas las bebidas tienen un costo de €1,0
    • La máquina recibe monedas de 10, 20 y 50 cent, y €1,0
El programa deberá permitir que el usuario seleccione una bebida e ingrese una a una las monedas. El
programa deberá detenerse cuando el importe de la gaseosa haya sido completado y, de ser necesario,
determinar el sobrante.
*/

let refresco = new Array();
refresco = new Array({"1":"KAS"},{"2":"Pepsi"}, {"3":"7Up"});

function seleccionarBebida(refresco){
     while(true){
         let bebida = prompt("1)KAS \n2)Pepsi \n3)7Up\n - Elige tu bebida: ");
         if (bebida == "1" || bebida == "2" || bebida == "3"){
             return refresco[parseInt(bebida-1)];
         }else{
             alert("No tengo esa bebida");
         }
     }
}

function monedasAceptadas(importe) {
    if (importe != 1 && importe != 10 && importe != 20 && importe != 50) {
        alert("Solo acepto monedas de 1, 10c, 20c y 50c");
        return false;
    } else {
        return true;
    }
}

function entrega(refresco, acumulado) {
    alert(`Disfruta tu bebida. ${refresco} \n Tu cambio es de ${(acumulado - 100)}`);
}

function pagar(b) {
    acumulado = 0;
    while (true) {
        pagado = parseInt(prompt("Ingrese moneda: "));
        if (monedasAceptadas(pagado)) {
            if (pagado == 1) {
                acumulado = acumulado + pagado * 100;
            } else {
                acumulado = acumulado + pagado;
            }
            if (acumulado >= 100) {
                entrega(refresco, acumulado);
                break;
            } else {
                alert("Te faltan " + (100 - acumulado));
            }
        }
    }
}

seleccionarBebida(refresco);
pagar(refresco)