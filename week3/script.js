let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
  let userInput = prompt("Player: Rock, Paper or Scissors?").trim().toLowerCase();
  if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
    console.log("You chose " + `${userInput}`)
  } else {
    console.log("Error! Try again!")
  }
  return userInput
}

function getComputerSelection() {
  let selections = ["rock", "paper", "scissors"]
  let result = selections[Math.floor(Math.random() * selections.length)];
  console.log("Computer chose" + " " + result)
  return result
}

function game(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    console.log("It's a tie!")
    result = "It's a tie!"
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins!")
    result = "Computer wins!" 
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player wins!")
    result = "Player wins!" 
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Computer wins!")
    result = "Computer wins!"
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins!")
    result = "Computer wins!"
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins!")
    result = "Player wins!"
  }
  else if (playerSelection === "scissors" && playerSelection === "rock") {
    console.log("Computer wins!")
    result = "Computer wins!"
  }
  if (result == "Player wins!") {
    playerScore += 1
    console.log("PlayerScore" + " " + playerScore)
  }
  else if (result == "Computer wins!") {
    computerScore += 1
    console.log("ComputerScore" + " " + computerScore)
  }
  else {
    playerScore += 1
    computerScore += 1
    console.log("PlayerScore" + " " + playerScore)
    console.log("ComputerScore" + " " + computerScore)
  }
}


// function playRound(playerSelection, computerSelection) {
//   for (i = 0; i < 5; i++) {

//   }
// }

// console.log(playRound(playerSelection, computerSelection));

let playerSelection = getPlayerSelection()
let computerSelection = getComputerSelection();

game(playerSelection, computerSelection)
