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
    } else if (playerSelection=='scissors') {
        if (computerSelection=='rock') {
            return compWin;
        } else if (computerSelection=='scissors') {
            return playerWin;
        } else {
            return draw;
        }
    }
}

function reset() {
    playerWins = 0;
    compWins = 0;
    totalWins = 0;
    latestOutcome.textContent='Welcome to Rock, Paper, Scissors!';
    runningScore.textContent=`Player wins: ${playerWins}, Comp wins: ${compWins}, Total wins: ${totalWins}`;
    winner.textContent='No winner yet!';
}

function clickOptionButton(e) {
    gameOutcome=playRound(e.target.textContent.toLowerCase(), getComputerSelection())
    latestOutcome.textContent=gameOutcome;
    if (gameOutcome=='Player wins!') {
        playerWins++;
        totalWins++;
    } else if (gameOutcome=='Computer wins!') {
        compWins++;
        totalWins++;
    }
    runningScore.textContent=`Player wins: ${playerWins}, Comp wins: ${compWins}, Total wins: ${totalWins}`;
    if (totalWins>=5) {
        if (playerWins>compWins) {
            winner.textContent=`The winner is the Player with ${playerWins} wins!`
        } else {
            winner.textContent=`The winner is the Computer with ${compWins} wins!`
        }
    }
}

const optionButtons=document.querySelectorAll(".option");
const latestOutcome = document.querySelector('#latest-outcome');
const runningScore = document.querySelector('#running-score');
const winner=document.querySelector('#winner')
const resetButton = document.querySelector('#restart');

let playerWins=0;
let compWins=0;
let totalWins=0;

latestOutcome.textContent='Welcome to Rock, Paper, Scissors!'
runningScore.textContent=`Player wins: ${playerWins}, Comp wins: ${compWins}, Total wins: ${totalWins}`;
winner.textContent='No winner yet!';

for (let i=0; i<optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', clickOptionButton)
}

resetButton.addEventListener('click', reset);