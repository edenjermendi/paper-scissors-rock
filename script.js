const randomNum = Math.random();

if (randomNum <= 0.33) {
    return "Paper"
} else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "Scissors"
} else {
    return "Rock"
}

function getComputerChoice() {
    return 
};