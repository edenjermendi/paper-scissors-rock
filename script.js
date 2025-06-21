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

function getHumanChoice() {
    let humanChoice = prompt("Make your choice; rock, paper or scissors?");
    return humanChoice;
};

const playerMove = getHumanChoice();
console.log(playerMove); // You should see whatever you typed in the prompt


