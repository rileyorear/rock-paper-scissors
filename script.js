//goal was to make ui work with each gamemode
const weapons = ["rock", "paper", "scissors"];

function randomNum () {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice () {
   return weapons[randomNum()];
}

let message;
let draw;

let playerWinCounter;
let computerWinCounter;
playerWinCounter = 0;
computerWinCounter = 0;

function playRound (playerSelection, computerSelection) { 
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "Round win! Rock beats scissors."
    playerWinCounter++;
    draw = false;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "Round win! Paper beats rock."
    playerWinCounter++;
    draw = false;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "Round win! Scissors beats paper."
    playerWinCounter++;
    draw = false;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message = "Round loss! Rock beats scissors."
    computerWinCounter++;
    draw = false;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message = "Round loss! Paper beats rock."
    computerWinCounter++;
    draw = false;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message = "Round loss! Scissors beats paper."
    computerWinCounter++;
    draw = false;
  } else if (computerSelection === playerSelection) {
    message = "It's a tie!";
    draw = true;
  } else {
    message = "Please enter either 'rock', 'paper', or 'scissors'.";
    draw = true;
  }
  return message;
}

//5 round match - No more no less, ties count as a round but do not count towards score! Typos also count as a round but do not count towards score, make sure you are accurate!
function game () {
  for (i = 0; i < 5; i++) {
    button
    console.log(playRound (weaponChoice(), getComputerChoice()));
    console.log("Player score: " + playerWinCounter);
    console.log("Computer score: " + computerWinCounter);
    weaponChoice = null;
  }
  if (playerWinCounter > computerWinCounter) {
    console.log("Player wins!")
    playerWinCounter = 0;
    computerWinCounter = 0;
  } else if (playerWinCounter < computerWinCounter) {
    console.log("Computer wins!")
    playerWinCounter = 0;
    computerWinCounter = 0;
  } else {
    console.log("It's a total draw!")
    playerWinCounter = 0;
    computerWinCounter = 0;
  }
}

//first to 3 - Just like how it sounds, first to 3 wins is the winner. Ties are not counted. 
function firstToThree () {
  let keepGoing = true;
  while (keepGoing) {
    if (playerWinCounter === 3 || computerWinCounter === 3) {
      break;
    } else {
      
      console.log(playRound (weaponChoice, getComputerChoice()));
      console.log("Player score: " + playerWinCounter);
      console.log("Computer score: " + computerWinCounter);
    }
  }
  if (playerWinCounter > computerWinCounter) {
    console.log("Player wins!")
    playerWinCounter = 0;
    computerWinCounter = 0;
  } else if (playerWinCounter < computerWinCounter) {
    console.log("Computer wins!")
    playerWinCounter = 0;
    computerWinCounter = 0;
  }
}

//best of 5 - Game doesn't stop at 3 wins if all 5 rounds haven't been played (gives possibility of the 5-0 sweep destruction). Ties are not counted.
function bestOfFive () {
  let gameCounter = 0;
  let keepGoing = true;
  while (keepGoing) {
    if (gameCounter !== 5) {
      
      console.log(playRound (weaponChoice, getComputerChoice()));
      if (draw === true) {
      console.log("Player score: " + playerWinCounter);
      console.log("Computer score: " + computerWinCounter);
      } else {
      console.log("Player score: " + playerWinCounter);
      console.log("Computer score: " + computerWinCounter);
      gameCounter++;
      }
    } else {
      break;
    }
  }
  if (playerWinCounter > computerWinCounter) {
    console.log("Player wins!")
    console.log("Player score: " + playerWinCounter);
    console.log("Computer score: " + computerWinCounter);
    playerWinCounter = 0;
    computerWinCounter = 0;
  } else if (playerWinCounter < computerWinCounter) {
    console.log("Computer wins!")
    console.log("Player score: " + playerWinCounter);
    console.log("Computer score: " + computerWinCounter);
    playerWinCounter = 0;
    computerWinCounter = 0;
  }
}

//ui
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const buttons = document.querySelectorAll()
const headerText = document.querySelector('.header-text');
const gameText = document.querySelector('.game-text');

function defaultSelection () {
  button1.textContent = '5 round match';
  button2.textContent = 'First to 3';
  button3.textContent = 'Best of 5';
  button1.addEventListener('click', game);
  button2.addEventListener('click', firstToThree);
  button3.addEventListener('click', bestOfFive);
}
defaultSelection();

function whenGameSelected () {
  headerText.textContent = 'What will you choose: rock, paper, or scissors?';
  button1.textContent = 'Rock';
  button2.textContent = 'Paper';
  button3.textContent = 'Scissors';
  button1.removeEventListener('click', game);
  button2.removeEventListener('click', firstToThree);
  button3.removeEventListener('click', bestOfFive);
  button1.addEventListener('click', () => {
    buttonContent = button1.textContent;
  });
  button2.addEventListener('click', () => {
    buttonContent = button1.textContent;
  });
  button3.addEventListener('click', () => {
    buttonContent = button1.textContent;
  });
}

function weaponChoice () {

}