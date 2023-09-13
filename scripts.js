// Keep track of player / computer score
let playerScore = 0;
let computerScore = 0;

// Return computer's choice from Rock, Paper, Scissors array
let getComputerChoice = function () {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

// Play a round - return winner/loser/tie
let playRound = function (playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === computerSelectionLower) {
        $("h1").text("It's a tie!");
        return "tie";
    } else if (
        (playerSelectionLower === "rock" && computerSelectionLower === "scissors") ||
        (playerSelectionLower === "paper" && computerSelectionLower === "rock") ||
        (playerSelectionLower === "scissors" && computerSelectionLower === "paper")
    ) {
        $("h1").text("You used " + playerSelection);
        return "player";
    } else {
        $("h1").text("Computer used " + computerSelection);
        return "computer";
    }
}

// Update scores and check for game over
function updateScores(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    $("#player-score").text(playerScore);
    $("#computer-score").text(computerScore);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    } 
}

// End the game and display the winner
function endGame() {
    if (playerScore > computerScore) {
        $("h1").text("You win the match with a score of " + playerScore + " to " + computerScore);
    } else if (computerScore > playerScore) {
        $("h1").text("Computer wins the match with a score of " + computerScore + " to " + playerScore);
    } else {
        $("h1").text("It's a tie with a score of " + playerScore + " to " + computerScore);
    }

    // reset the game
    playerScore = 0;
    computerScore = 0;
    $("#player-score").text(playerScore);
    $("#computer-score").text(computerScore);
}

// Function to handle button click
function handleButtonClick(event) {
    const playerSelection = event.target.id.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScores(result);
}

// Add event listeners to the buttons
$(".btn").on("click", handleButtonClick);