let getComputerChoice = function () {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

let playRound = function (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const pc = computerSelection.toLowerCase();

    if (player === pc){
        alert("Tie!")
        return "tie";
    } else if (
        (player === "rock" && pc === "scissors") ||
        (player === "paper" && pc === "rock") ||
        (player === "scissors" && pc === "paper")
    ) {
        alert("Player Wins!")
        return "player";
    } else {
        alert("PC Wins!")
        return "pc";
    }
}

let playerScore = 0;
let computerScore = 0;

let game = function () {
    let gamesPlayed = 1;

    while (gamesPlayed <= 5) {
        alert("Game Number: " + gamesPlayed);
        const playerSelection = prompt("Choose rock/paper/scissors: ");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result === "player"){
            playerScore++;
        } else if (result === "pc"){
            computerScore++;
        }
        gamesPlayed++;
    }

    if (playerScore > computerScore) {
        alert("Player wins the match with a score of " + playerScore + " to " + computerScore);
    } else if (computerScore > playerScore) {
        alert("PC wins the match with a score of " + computerScore + " to " + playerScore);
    } else {
        alert("It's a tie with a score of " + playerScore + " to " + computerScore);
    }
}

game();