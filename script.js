// Rock Paper Scissors

console.log("Welcome to Rock Paper Scissors!");

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// Get computer choice function

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner function
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

// Get player choices from buttons

const choiceButtons = document.querySelectorAll(".choices button");

// Add event listeners to each choice button
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.id.toLowerCase();
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    if (result === "You win!") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (result === "Computer wins!") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    console.log(result);
    checkMatchWinner();
  });
});

// Reset game function
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
// Check for match winner after each round
function checkMatchWinner() {
  if (playerScore === 5) {
    console.log("You won the match!");
    alert("You won the match!");
    resetGame();
  } else if (computerScore === 5) {
    console.log("Computer won the match!");
    alert("Computer won the match!");
    resetGame();
  }
}
