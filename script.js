const weapons = ["rock", "paper", "scissors"];

//random number 0-2
function randomNum () {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice () {
   return weapons[randomNum()];
}

let playerWinCounter = 0;
let computerWinCounter = 0;

function playRound (playerSelection, computerSelection) { //computerSelection should be getComputerChoice()  
  let message;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "You win! Rock beats scissors."
    playerWinCounter++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "You win! Paper beats rock."
    playerWinCounter++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "You win! Scissors beats paper."
    playerWinCounter++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message = "You lose! Rock beats scissors."
    computerWinCounter++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message = "You lose! Paper beats rock."
    computerWinCounter++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message = "You lose! Scissors beats paper."
    computerWinCounter++;
  } else if (computerSelection === playerSelection) {
    message = "It's a tie!";
  } else {
    message = "Please enter either 'rock', 'paper', or 'scissors'.";
  }
  return message;
}

function game () {
  let weaponChoice;
  for (i = 0; i < 5; i++) {
    weaponChoice = prompt("What will you choose: rock, paper or scissors?", "");
    console.log(playRound (weaponChoice, getComputerChoice()));
    console.log("Player score: " + playerWinCounter);
    console.log("Computer score: " + computerWinCounter);
  }
  if (playerWinCounter > computerWinCounter) {
    console.log("Player wins!")
  } else if (playerWinCounter < computerWinCounter) {
    console.log("Computer wins!")
  } else {
    console.log("It's a total draw!")
  }
}

game();