//Reescribir el juego piedra papel tijeras utilizando un objeto
// para los jugadores, con umetodo jugar que nos devuelva
// un texto con lo que cada jugador juega

const game = (player1, player2) => {
    let player1Game = player1.play();
    let player2Game = player2.play();
    const rules = {
        piedra: 'tijera',
        papel: 'piedra',
        tijera: 'papel'
    };
    if (player1Game === player2Game){
        return 'Empate!'
    } else if(player2Game === rules[player1Game]){
        return `Ganador: ${player1.nombre}`
    } else{
        return `Ganador: ${player2.nombre}`
    }
     
    
}

function Player(nombre) {
    let actions = ['piedra', 'papel', 'tijera']
    this.nombre = nombre;
    this.play = function () {
        return actions[Math.floor(Math.random() * actions.length)];
    }
}

let player1 = new Player ('Batman')
let player2 = new Player ('Joker')

for (let i = 0; i < 10; i++){
    console.log(game(player1, player2))
}