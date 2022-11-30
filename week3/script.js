const selections = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;


function computerPlay(selections) {
  return [Math.floor((Math.random()*selections.length))]
}


function PlayRound(playerSelection, computerSelection) {
  for (i = 0; i < 5; i++) {
    
  }
}

let playerSelection = []
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function Game() {
  playerSelection = playerSelection.trim().toLowerCase()
  computerSelection = computerSelection.trim().toLowerCase()

  if (computerSelection === playerSelection) {
    return "It's a tie!";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'computer wins!';
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'player wins!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'computer wins!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'computer wins!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player wins!';
  }
  else if (playerSelection === 'scissors' && playerSelection === 'rock') {
    return 'computer wins!'
  }
}
