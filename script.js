<<<<<<< HEAD
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection;

checkWinner();

//Event listeners for the buttons and their game() fxn
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



//Scoreboard creation
const container = document.querySelector("#container");
const playerResults = document.createElement('div');
playerResults.classList.add('resultDisplay');
playerResults.textContent = `Player\'s score: ${playerScore}`;
container.appendChild(playerResults);
const computerResults = document.createElement('div');
computerResults.classList.add('resultDisplay');
computerResults.textContent = `Computer\'s score: ${computerScore}`;
container.appendChild(computerResults);

=======
>>>>>>> 8acc144b2e5b1eea1b334d33525aa2bf309b9817
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

<<<<<<< HEAD
function playRound (playerSelection, computerSelection) { //Determines the winner of a single round
=======
function playRound (playerSelection, computerSelection) {
>>>>>>> 8acc144b2e5b1eea1b334d33525aa2bf309b9817
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
<<<<<<< HEAD
        return 'Scissors vs. scissors, it\'s a tie!';
=======
        return 'Scissosrs vs. scissors, it\'s a tie!';
>>>>>>> 8acc144b2e5b1eea1b334d33525aa2bf309b9817
    }
}

function game() {
<<<<<<< HEAD
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
=======
    let playerScore = 0;
    let computerScore = 0
    let repeated = false;
    alert("Ready for a game of Rock Paper Scissors? Let's play best 3 out of 5!");
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
        const computerSelection = computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        if (playerSelection === computerSelection) {
            //If the result is a tie and the round repeats
            repeated = true;
            i--;
            console.log("This round was a tie! Player's score: " + playerScore + ", Computer's score: " + computerScore);
        } else if ((computerSelection === 'ROCK' && playerSelection === 'PAPER') || 
                    (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') || 
                    (computerSelection === 'SCISSORS' && playerSelection === 'ROCK')) {
            //If player wins a round
            playerScore ++;
            console.log("You won this round! Player's score: " + playerScore + ", Computer's score: " + computerScore);
        } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
                    (computerSelection === 'PAPER' && playerSelection === 'ROCK') || 
                    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
            //If player loses a round
            computerScore ++;
            console.log("You lost this round! Player's score: " + playerScore + ", Computer's score: " + computerScore);
        }
        if (parseInt(playerScore) === 3) {
            console.log("Congratulations! You have won!");
            break;
        } else if (parseInt(computerScore) === 3) {
            console.log("You have lost the game!");
            break;
        }
    }
}

game();

//changes I have made to solve problem of not having specified rounds:
    //moved the randomNumber variable inside computerPlay
    //moved the playerSelection and computerSelection inside the for loop (which really makes sense to do)
>>>>>>> 8acc144b2e5b1eea1b334d33525aa2bf309b9817
