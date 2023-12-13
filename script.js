function getComputerChoice() {
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

const computerSelection=getComputerChoice();
//const playerSelection=prompt('Enter Rock, Paper, or Scissors: ').toLowerCase();
const playerSelection="rock";


