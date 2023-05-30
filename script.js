const markedLocations = [{}]
let currentplayer = 'player1';

const markLocation = (playerid, buttonid) => {
    return {playerid, buttonid};
}

function buttonpressed(val, id) {
    const buttonclicked = markLocation(currentplayer, val)
    let playerclick = document.getElementById(id)
    markedLocations.push(buttonclicked)
    if (currentplayer === 'player1') {
        playerclick.value="X";
        playerclick.style.color = 'black';
    } else {
        playerclick.value="O";
        playerclick.style.color = 'black';
    }
    playerclick.onclick = null;
    if (currentplayer === 'player1') {
        currentplayer = 'player2'
    } else if (currentplayer === 'player2') {
        currentplayer = 'player1'
    }
    checkWinner()
}

let checkWinner = function() {      
    const player1array = [{}]
    const player2array = [{}]    
    markedLocations.find((o) => {
        if (o.playerid === 'player1') {
            player1array.push(o.buttonid) 
                    
        } else if (o.playerid === "player2") {
            player2array.push(o.buttonid)            
        }
    })
    function checkwin(winner) {
        return winner.every(elem => player1array.includes(elem))
    }
    function checkloss(winner) {
        return winner.every(elem => player2array.includes(elem))
    }
    if (checkwin(['tr', 'tl', 'tc']) === true) {
        console.log('winner!')
    } else if (checkwin(['tr', 'mr', 'br'])) {
        console.log('winner!')
    } else if (checkwin(['tl', 'ml', 'bl'])) {
        console.log('winner!')
    } else if (checkwin(['tc', 'mc', 'bc'])) {
        console.log('winner!')
    } else if (checkwin(['mr', 'ml', 'mc'])) {
        console.log('winner!')
    } else if (checkwin(['br', 'bl', 'bc'])) {
        console.log('winner!')
    } else if (checkwin(['tl', 'mc', 'br'])) {
        console.log('winner!')
    }  else if (checkwin(['tr', 'mc', 'bl'])) {
        console.log('winner!')
    }
    if (checkloss(['tr', 'tl', 'tc']) === true) {
        console.log('loser!')
    } else if (checkloss(['tr', 'mr', 'br'])) {
        console.log('loser!')
    } else if (checkloss(['tl', 'ml', 'bl'])) {
        console.log('loser!')
    } else if (checkloss(['tc', 'mc', 'bc'])) {
        console.log('loser!')
    } else if (checkloss(['mr', 'ml', 'mc'])) {
        console.log('loser!')
    } else if (checkloss(['br', 'bl', 'bc'])) {
        console.log('loser!')
    } else if (checkloss(['tl', 'mc', 'br'])) {
        console.log('loser!')
    }  else if (checkloss(['tr', 'mc', 'bl'])) {
        console.log('loser!')
    }
}