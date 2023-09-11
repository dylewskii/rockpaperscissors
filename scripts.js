let getComputerChoice = function () {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

let playRound = function (playerSelection, computerSelection) {
    if (!playerSelection || !computerSelection) {
        return "Please provide both playerSelection and computerSelection.";
    }

    const player = playerSelection.toLowerCase();
    const pc = computerSelection.toLowerCase();

    if (player === pc){
        return "tie";
    } else if (
        (player === "rock" && pc === "scissors") ||
        (player === "paper" && pc === "rock") ||
        (player === "scissors" && pc === "paper")
    ) {
        return "player wins";
    } else {
        return "pc wins";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

playRound();