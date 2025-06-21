//Randomly generated computer choice generated rock, paper or scissors
function getComputerChoice() {
    const randomNum = Math.random();
    console.log(randomNum);

if (randomNum <= 0.33) {
    return "Paper";
} else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "Scissors";
} else {
    return "Rock";
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

//Prep both values for playRound function
const humanSelection = deCapitalize(getHumanChoice());
const computerSelection = getComputerChoice();

//
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer wins!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Computer wins!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Computer wins";
    } else {
        return "Try again.."
    }
}

//testing
console.log(playRound(humanSelection, computerSelection));
console.log("Human:", humanScore, "Computer:", computerScore);





