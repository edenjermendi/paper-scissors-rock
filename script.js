//Randomly generated computer choice generated rock, paper or scissors
function getComputerChoice() {
    const randomNum = Math.random();

if (randomNum <= 0.33) {
    return "paper";
} else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "scissors";
} else {
    return "rock";
}
};

//Create variables to start both scores at 0
let humanScore = 0;
let computerScore = 0;

//Prompt user to input their choice and return in
function getHumanChoice() {
    let humanChoice = prompt("Make your choice; rock, paper or scissors?");
    return humanChoice;
};

//Turns all user input to lower case
function deCapitalize(humanChoice) {
    return humanChoice.toLowerCase();
}

//Add function and logic for a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Round: It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Round: Computer wins!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Round: You win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Round: You win!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Round: Computer wins!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Round: You win!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Round: Computer wins";
    } else {
        return "Try again.."
    }
}

//Add function and logic to play 5 rounds to make full game
function playGame() {
    for (let x = 0; x < 5; x++) {
        let humanChoice = deCapitalize(getHumanChoice());
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
} 

//call above function
playGame();

//advise user who won the game overall
if (humanScore > computerScore) {
  console.log("You won the game!");
} else if (computerScore > humanScore) {
  console.log("Computer won the game!");
} else {
  console.log("It's a tie! Refresh page to play again.");
}



