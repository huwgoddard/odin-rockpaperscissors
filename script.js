function getComputerSelection() {
    return ['rock','paper','scissors'][Math.floor(Math.random()*3)]; 
}


function playRound(playerSelection, computerSelection) {
    const compWin = 'Computer wins!';
    const playerWin = 'Player wins!';
    const draw = 'It\'s a draw!';
    const badInput='Player input not understood!'
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
    } else {
        return badInput;
    }
}

function game() {
    console.log('Welcome to rock, paper, scissors!')

    playerWins=0;
    compWins=0;
    totalWins=0;

    const optionButtons=document.querySelectorAll(".option");

    for (let i=0; i<optionButtons.length; i++) {
        optionButtons[i].addEventListener('click', function(e) {
            console.log(playRound(e.target.textContent.toLowerCase(), getComputerSelection()))
        })
    }

/*     while (totalWins<5) {
        playerSelection=prompt('Rock, Paper, Scissors? ')
        compSelection=getComputerSelection();
        gameOutcome=playRound(playerSelection,compSelection);
        if (gameOutcome=='Player wins!') {
            playerWins++;
            totalWins++;
        } else if (gameOutcome=='Computer wins!') {
            compWins++;
            totalWins++;
        }
        console.log('You selected ' + playerSelection);
        console.log('The computer selected ' + compSelection);
        console.log(gameOutcome);
        console.log('Player wins: ' + playerWins);
        console.log('Computer wins: ' + compWins);
        console.log('Total wins: ' + totalWins);
    }

    if (playerWins>compWins) {
        console.log('Player won with ' + playerWins + ' wins!')
    } else {
        console.log('Computer won with ' + compWins + ' wins!')
    } */
}

const startButton = document.querySelector('#start-game');
startButton.addEventListener('click', game);