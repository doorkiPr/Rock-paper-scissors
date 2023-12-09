
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomNumber = getRandomNumber(1, 3);

    return randomNumber === 1 ? "rock"
        : randomNumber === 2 ? "scissors"
            : "paper";

}

function playRound(playerSelection, computerSelection,win) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection();

    if (playerChoice === "rock" && computerChoice === "paper") {
        win = false;
        return "You Loose paper  beats rock !"
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You Win rock beats scissors ! "
    }

    else if (playerChoice === "paper" && computerChoice === "scissors") {
        win = false;
        return "You Loose scissors beats paper !"
    }

    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You Win paper beats rock ! "
    }

    else if (playerChoice === "scissors" && computerChoice === "rock") {
        win = false;
        return "You Loose rock beats scissors! "
    }

    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You Win scissors beats paper !"
    }

    else if (playerChoice === computerChoice) {
        let newPlayerChoice = prompt("It's a tie ! pick a new answer");  

         playRound(newPlayerChoice, getComputerChoice)

    }
    else if (playerChoice != "rock" || playerChoice != "scissors" || playerChoice != "paper") {

        let newPlayerChoice = prompt("only rock scissors and paper allowed ! pick a new answer");

         playRound(newPlayerChoice, getComputerChoice)
    }

}

function game(playerSelection,computerSelection){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,computerSelection)
      }
}



// take player and computer choices 
// compare the choices to declare a winner 
// if it finds a tie replay the round 
// if u missinput it replays the round