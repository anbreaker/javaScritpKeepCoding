/*KC_EJ10
Crear un programa que reciba un número del 1 al 7 y muestre el
nombre de la película StarWars correspondiente.
    Ejemplo
        >> Entrada: 5 (o bien V)
        >> Salida: Star Wars: Episodio V - El Imperio contraataca
        Star Wars: Episodio I - La amenaza fantasma
        Star Wars: Episodio II - El ataque de los clones
        Star Wars: Episodio III - La venganza de los Sith
        Star Wars: Episodio IV - Una nueva esperanza
        Star Wars: Episodio V - El Imperio contraataca
        Star Wars: Episodio VII - El despertar de la Fuerza
        Star Wars: Episodio VIII - Los últimos Jedi
        Star Wars: Episodio IX - El ascenso de Skywalker
*/

const peliculasStarWars = [
    "Star Wars Episodio I: La amenaza fantasma",
    "Star Wars Episodio II: El ataque de los clones",
    "Star Wars Episodio III: La venganza de los Sith",
    "Star Wars Episodio IV: Una nueva esperanza",
    "Star Wars Episodio V: El Imperio contraataca",
    "Star Wars Episode VI El retorno del Jedi",
    "Star Wars Episodio VII: El despertar de la Fuerza",
    "Star Wars Episodio VIII: Los últimos Jedi",
    "Star Wars Episodio IX: El ascenso de Skywalker"
    ]

const numRomanos = ["I","II","III","IV","V","VI","VII","VIII","IX"]


let numPeli = parseInt(prompt("¿Qué pelicula de Star Wars Quieres ver?"));

function convertirRomanoToArabe(numPeli){
    if(numRomanos.indexOf(numPeli) != -1){
        numPeli = (numRomanos.indexOf(numPeli) + 1);
        console.log('Ver si pongo esto CONVERSOR ->', numPeli);
        eligeMovieStarWars(peliculasStarWars[numPeli])
    } else{
        numPeli-=1
        eligeMovieStarWars(peliculasStarWars[numPeli])
        console.log('Ver si pongo esto DIRECTO->', numPeli);
    }
}


function eligeMovieStarWars(numPeli) {
    document.write(`Ver si pone Algo ->${numPeli} ${peliculasStarWars[numPeli]}`);

    //return peliculasStarWars[numPeli]
}

convertirRomanoToArabe(numPeli)