const weapons = ["rock", "paper", "scissors"];

//random number 0-2
function randomNum () {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice () {
   return weapons[randomNum()];
}

function playRound (playerSelection, computerSelection) { //computerSelection should be getComputerChoice()
    if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock."
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper."
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You lose! Rock beats scissors."
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You lose! Paper beats rock."
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You lose! Scissors beats paper."
  } else {
    return "It's a tie!";
  }
}