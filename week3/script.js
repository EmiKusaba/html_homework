
let userInput = prompt("Player: Rock, Paper or Scissors?");
if (userInput.trim().toLowerCase() === "paper" || userInput.trim().toLowerCase() === "rock" || userInput.trim().toLowerCase() === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

function computerPlay() {
  let selections = ["rock", "paper", "scissors"]
  let random = selections[Math.floor(Math.random() * selections.length)];
  console.log("computer" + " " + random)
}

// function PlayRound(playerSelection, computerSelection) {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (i = 0; i < 5; i++) {

//   }
// }
let playerSelection = userInput
let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

Game()
function Game(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
      console.log("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      console.log('computer wins!');
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      console.log('player wins!');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
      console.log('computer wins!');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      console.log ('computer wins!');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      console.log('player wins!');
    }
    else if (playerSelection === 'scissors' && playerSelection === 'rock') {
      console.log('computer wins!');
    }
  }

  
