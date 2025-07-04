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

function updateResults(result) {
    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = `
        <p>${result}</p>
        <p>Score: You ${humanScore} - Computer ${computerScore}</p>
  `;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultsDiv.innerHTML += `<p><strong>${winner} won the game!</strong></p>`;
        document.querySelectorAll("button").forEach(button => button.disabled = true);
  }
}

//addEventListeners for each button

//rock button
document.querySelector(".rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    updateResults(result);
});

//paper button
document.querySelector(".paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    updateResults(result);
});

//scissors button
document.querySelector(".scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    updateResults(result);
});


