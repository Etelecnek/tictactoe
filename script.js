const markedLocations = [{}]

const markLocation = (playerid, buttonid) => {
    return {playerid, buttonid};
}

let checkWinner = function() {    
    markedLocations.find((o) => {
        if (o.playerid === 'player1') {
            console.log(o.buttonid)
        } else if (o.playerid === "player2") {
            console.log(o.buttonid)
        }
    })        
}

const firstmove = markLocation('player1', 'First')
const secondmove = markLocation('player2', 'Second')
markedLocations.push(firstmove)
markedLocations.push(secondmove)

checkWinner()
