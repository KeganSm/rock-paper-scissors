let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection;

checkWinner(); 
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', ()=>{ //to call fxn w/ parameter in a event listener, use empty fxn to call fxn
    computerSelection = computerPlay();
    playerSelection = 'ROCK';
    playRound(playerSelection, computerSelection);
    game();
}); 
paperBtn.addEventListener('click', ()=>{ 
    computerSelection = computerPlay();
    playerSelection = 'PAPER';
    playRound(playerSelection, computerSelection);
    game();
});
scissorsBtn.addEventListener('click', ()=>{ 
    computerSelection = computerPlay();
    playerSelection = 'SCISSORS';
    playRound(playerSelection, computerSelection);
    game();
});



//Scoreboard
const container = document.querySelector("#container");
const playerResults = document.createElement('div');
playerResults.classList.add('resultDisplay');
playerResults.textContent = `Player\'s score: ${playerScore}`;
container.appendChild(playerResults);
const computerResults = document.createElement('div');
computerResults.classList.add('resultDisplay');
computerResults.textContent = `Computer\'s score: ${computerScore}`;
container.appendChild(computerResults);

function computerPlay () { //Takes the random number between 1 and 3 and returns rock/paper/scissors
    let randomNumber = Math.floor(Math.random()*3)+1; //Selects a random number between 1 and 3
    if (randomNumber === 1) {
        return 'ROCK';
    } else if (randomNumber === 2) {
        return 'PAPER';
    } else if (randomNumber === 3) {
        return 'SCISSORS';
    }
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection === 'ROCK' && playerSelection === 'ROCK') {
        return 'Rock vs. rock, it\'s a tie!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        return 'Paper beats rock, you win!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        return 'Rock beats scissors, you lose!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        return 'Paper beats rock, you lose!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'PAPER') {
        return 'Paper vs. paper, it\'s a tie!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        return 'Scissors beats paper, you win!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        return 'Rock beats scissors, you win!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        return 'Scissors beats paper, you lose!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS') {
        return 'Scissors vs. scissors, it\'s a tie!';
    }
}

function game() {
    if (playerSelection === computerSelection) { //If the result is a tie and the round repeats
        console.log("This round was a tie! Player's score: " + playerScore + ", Computer's score: " + computerScore);
    } else if ((computerSelection === 'ROCK' && playerSelection === 'PAPER') || 
                (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') || 
                (computerSelection === 'SCISSORS' && playerSelection === 'ROCK')) { //If player wins a round
        playerScore ++;
        playerResults.textContent = `Player\'s score: ${playerScore}`;
        checkWinner();
        console.log("You won this round! Player's score: " + playerScore + ", Computer's score: " + computerScore);
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
                (computerSelection === 'PAPER' && playerSelection === 'ROCK') || 
                (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) { //If player loses a round
        computerScore ++;
        computerResults.textContent = `Computer\'s score: ${computerScore}`;
        checkWinner();
        console.log("You lost this round! Player's score: " + playerScore + ", Computer's score: " + computerScore);
    }
}

function checkWinner () { //Alerts the winner and disables buttons
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            alert(`Congratulations! You have won the game! Final score: Player: ${playerScore}, Computer: ${computerScore}`);
        } else {
            alert(`You have lost! Final score: Player: ${playerScore}, Computer: ${computerScore}`);
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}
