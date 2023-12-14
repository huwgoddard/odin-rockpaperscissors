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
    playerWins=0;
    compWins=0;
    totalWins=playerWins+compWins;

    while (totalWins<5) {
        playerSelection=prompt('Rock, Paper, Scissors? ')
        compSelection=getComputerSelection();
        gameOutcome=playRound(playerSelection,computerSelection)
        console.log(gameOutcome)
        if (gameOutcome=='Player wins!') {
            playerWins++;
            continue;
        } else if (gameOutcome=='Computer wins!') {
            compWins++;
            continue;
    }
}
const computerSelection=getComputerSelection();
//const playerSelection=prompt('Enter Rock, Paper, or Scissors: ').toLowerCase();
const playerSelection="rock";