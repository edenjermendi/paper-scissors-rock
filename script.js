// Randomly generated computer choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum <= 0.33) {
        return "paper";
    } else if (randomNum <= 0.66) {
        return "scissors";
    } else {
        return "rock";
    }
}

// Create variables to start both scores at 0
let humanScore = 0;
let computerScore = 0;

// Add function and logic for a single round
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
        return "Round: Computer wins!";
    } else {
        return "Try again..";
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
        
        // Disable choice buttons
        document.querySelectorAll(".paper, .scissors, .rock").forEach(button => button.disabled = true);
        
        // Create reset button
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.classList.add("btn"); // match style
        resetBtn.style.marginTop = "14px";
        resetBtn.addEventListener("click", resetGame);

        resultsDiv.appendChild(resetBtn);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".results").innerHTML = `
        <p>Game reset! Choose your move.</p>
        <p>Score: You 0 - Computer 0</p>
    `;
    document.querySelectorAll(".paper, .scissors, .rock").forEach(button => button.disabled = false);
}

// Event listeners
document.querySelector(".rock").addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    updateResults(result);
});

document.querySelector(".paper").addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    updateResults(result);
});

document.querySelector(".scissors").addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    updateResults(result);
});
