const play = (player1, player2) => {
    const rules = {
        piedra: 'tijera',
        papel: 'piedra',
        tijera: 'papel'
    };
    if (player1 === player2){
        return 'Empate'
    } else if(player2 === rules[player1]){
        return 'Gana Jugador 1'
    } else return 'Gana el Jugador 2'
    
}

console.log(play('tijera','piedra'))