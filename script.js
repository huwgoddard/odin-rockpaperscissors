function getComputerSelection() {
    return ['rock','paper','scissors'][Math.floor(Math.random()*3)]; 
}


function playRound(playerSelection, computerSelection) {
    const compWin = 'Computer wins!';
    const playerWin = 'Player wins!';
    const draw = 'It\'s a draw!';
    if (playerSelection=='rock') {
        if (computerSelection=='paper') {
            return compWin;
        } else if (computerSelection=='scissors') {
            return playerWin;
        } else {
            return draw;
        }
    } else if (playerSelection=='paper') {
        if (computerSelection=='rock') {
            return playerWin;
        } else if (computerSelection=='scissors') {
            return compWin;
        } else {
            return draw;
        }
    } else /*playerSelection='scissors'*/ {
        if (computerSelection=='rock') {
            return compWin;
        } else if (computerSelection=='scissors') {
            return playerWin;
        } else {
            return draw;
        }
    }
}

function game() {
    console.log('Welcome to rock, paper, scissors!')

    playerWins=0;
    compWins=0;
    totalWins=playerWins+compWins;

    while (totalWins<5) {
        playerSelection=prompt('Rock, Paper, Scissors? ')
        compSelection=getComputerSelection();
        gameOutcome=playRound(playerSelection,compSelection);
        if (gameOutcome=='Player wins!') {
            playerWins++;
        } else if (gameOutcome=='Computer wins!') {
            compWins++;
        }
        console.log('You selected ' + playerSelection);
        console.log('The computer selected ' + compSelection);
        console.log(gameOutcome);
        console.log('Player wins: ' + playerWins);
        console.log('Computer wins: ' + compWins);
        console.log('Total wins: ' + totalWins);
    }
}

game();