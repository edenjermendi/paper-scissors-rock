function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum <= 0.33) return "paper";
    if (randomNum <= 0.66) return "scissors";
    return "rock";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "Round: It's a tie!";
    if (humanChoice === "rock" && computerChoice === "paper") { computerScore++; return "Round: Computer wins!"; }
    if (humanChoice === "rock" && computerChoice === "scissors") { humanScore++; return "Round: You win!"; }
    if (humanChoice === "paper" && computerChoice === "rock") { humanScore++; return "Round: You win!"; }
    if (humanChoice === "paper" && computerChoice === "scissors") { computerScore++; return "Round: Computer wins!"; }
    if (humanChoice === "scissors" && computerChoice === "paper") { humanScore++; return "Round: You win!"; }
    if (humanChoice === "scissors" && computerChoice === "rock") { computerScore++; return "Round: Computer wins!"; }
    return "Try again..";
}

function updateResults(result) {
    const resultsDiv = document.querySelector(".results");

    // Build inner content
    resultsDiv.innerHTML = `
        <div class="results-content">
            <p>${result}</p>
            <p>Score: You ${humanScore} - Computer ${computerScore}</p>
        </div>
    `;

    const content = resultsDiv.querySelector(".results-content");

    // Trigger smooth animation
    content.classList.remove("update");
    void content.offsetWidth; // reflow
    content.classList.add("update");

    // End game check
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        content.innerHTML += `<p><strong>${winner} won the game!</strong></p>`;

        document.querySelectorAll(".paper, .scissors, .rock").forEach(btn => btn.disabled = true);

        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.classList.add("btn");
        resetBtn.style.marginTop = "14px";
        resetBtn.addEventListener("click", resetGame);
        content.appendChild(resetBtn);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = `
        <div class="results-content">
            <p>Game reset! Choose your move.</p>
            <p>Score: You 0 - Computer 0</p>
        </div>
    `;
    document.querySelectorAll(".paper, .scissors, .rock").forEach(btn => btn.disabled = false);
}

document.querySelector(".rock").addEventListener("click", () => {
    updateResults(playRound("rock", getComputerChoice()));
});
document.querySelector(".paper").addEventListener("click", () => {
    updateResults(playRound("paper", getComputerChoice()));
});
document.querySelector(".scissors").addEventListener("click", () => {
    updateResults(playRound("scissors", getComputerChoice()));
});
