const markedLocations = [
    {
        playerid: '',
        LocationID: 'tlbutton',       
    }, 
    {
        playerid: '',
        LocationID: 'tcbutton',
    }, 
    {
        playerid: '',
        LocationID: 'trbutton',
    }, 
    {
        playerid: '',
        LocationID: 'mlbutton',
    }, 
    {
        playerid: '',
        LocationID: 'mcbutton',
    }, 
    {
        playerid: '',
        LocationID: 'mrbutton',
    }, 
    {
        playerid: '',
        LocationID: 'blbutton',

    }, 
    {
        playerid: '',
        LocationID: 'bcbutton',
    }, 
    {
        playerid: '',
        LocationID: 'brbutton',
    }
]

let player1 = 'player1';
let player2 = 'player2';
let currentPlayer = player1;


function buttonpressed(id) {
    markedLocations.find(v => v.LocationID === id).playerid = currentPlayer;
    for (let i = 0; i < markedLocations.length; i++) {        
        if (markedLocations[i].playerid === player1) {
            let playerclick = document.getElementById(markedLocations[i].LocationID)
            playerclick.value = "X";
            playerclick.style.pointerEvents = 'none';
        } else if (markedLocations[i].playerid === player2) {
            let playerclick = document.getElementById(markedLocations[i].LocationID)
            playerclick.value = "O";
            playerclick.style.pointerEvents = 'none';
        }
    }    
    switch (currentPlayer) {
        case player1:
            currentPlayer = player2;
            break;
        case player2:
            currentPlayer = player1;
            break;
    }
    checkWinner(markedLocations)    
}

function checkWinner(board) {
    const winningCominations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCominations.length; i++) {
        const [a, b, c] = winningCominations[i];
        if (board[a].playerid && board[a].playerid === board[b].playerid && board[a].playerid === board[c].playerid) {            
            outcomealert(board[a].playerid)
            return true;            
        }
    }
    return false;    
}

function outcomealert (player) {
    document.getElementById("message").innerHTML = player + " is the winner!"
    document.getElementById("outcomealert").style.display="block";
}

function resetgame() {
    let gameboardbuttons = document.getElementsByClassName("gameboard");
    for (let i = 0; i < gameboardbuttons.length; i++) {
        let buttons = gameboardbuttons[i];
        buttons.value = "";
        buttons.style.pointerEvents = 'auto';
        markedLocations[i].playerid = "";
    }
    currentPlayer = player1;
    document.getElementById("outcomealert").style.display="none";
}

function submitForm() {
    event.preventDefault()
    let formplayer1name = document.querySelector('#player1name').value;
    let formplayer2name = document.querySelector('#player2name').value;
    if (formplayer1name === formplayer2name) {
        alert('Player 1 and Player 2 cannot have the same names')
    } else {
        document.getElementById('player1').innerHTML = "Player: " + formplayer1name;
        document.getElementById('player2').innerHTML = "Player: " + formplayer2name;
        player1 = formplayer1name;
        player2 = formplayer2name;
        currentPlayer = player1;
        document.getElementById("submitform").style.display="none";
    }    
}