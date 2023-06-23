const weapons = ["rock", "paper", "scissors"];

//random number 0-2
function randomNum () {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice () {
   return weapons[randomNum()];
}

function playRound (playerSelection, computerSelection) { //computerSelection should be getComputerChoice()  
  let message;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "You win! Rock beats scissors."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "You win! Paper beats rock."
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "You win! Scissors beats paper."
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message = "You lose! Rock beats scissors."
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message = "You lose! Paper beats rock."
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message = "You lose! Scissors beats paper."
  } else if (computerSelection === playerSelection) {
    message = "It's a tie!";
  } else {
    message = "Please enter either 'rock', 'paper', or 'scissors'.";
  }
  return message;
}

