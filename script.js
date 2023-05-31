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

function currentPlayer(player) {
    return player
}

let cplayer = 'player1';

function buttonpressed(id) {  

    markedLocations.find(v => v.LocationID === id).playerid = currentPlayer(cplayer);    
    for (let i = 0; i < markedLocations.length; i++) {        
        if (markedLocations[i].playerid === 'player1') {
            let playerclick = document.getElementById(markedLocations[i].LocationID)
            playerclick.value="X";
            playerclick.onclick = null;
        } else if (markedLocations[i].playerid === 'player2') {
            let playerclick = document.getElementById(markedLocations[i].LocationID)
            playerclick.value="O";
            playerclick.onclick = null;
        }
    }    
    switch (cplayer) {
        case 'player1':
            cplayer = 'player2';
            break;
        case 'player2':
            cplayer = 'player1';
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
            alert(board[a].playerid + ' is the winner!')
            return true;
        }
    }
    return false;
    
}

