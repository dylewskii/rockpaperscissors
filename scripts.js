
let getComputerChoice = function () {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    console.log(choice);
}

getComputerChoice();