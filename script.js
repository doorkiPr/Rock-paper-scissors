let playerScore = 0;
let computerScore = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomNumber = getRandomNumber(1, 3);

    return randomNumber === 1 ? "rock"
        : randomNumber === 2 ? "scissors"
            : "paper";

}

function playRound(playerSelection, computerSelection) {
    let isRoundWon = false;
    let computerChoice = computerSelection();

    if (playerSelection === "rock" && computerChoice === "paper") {
        // return "You Loose paper  beats rock !"
        return isRoundWon
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        // return "You Win rock beats scissors ! "
        return !isRoundWon
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        // return "You Loose scissors beats paper !"
        return isRoundWon
    }

    else if (playerSelection === "paper" && computerChoice === "rock") {
        // return "You Win paper beats rock ! "
        return !isRoundWon
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        // return "You Loose rock beats scissors! "
        return isRoundWon
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        // return "You Win scissors beats paper !"
        return !isRoundWon
    }

    else if (playerSelection === computerChoice) {
        // let newPlayerChoice = prompt("It's a tie ! pick a new answer");

        // playRound(newPlayerChoice, getComputerChoice)

    }

}



const buttonWrapper = document.querySelector("#buttonWrapper");
const buttonArray = Array.from(buttonWrapper.children);


buttonArray.forEach(button =>{
    let answer;
    button.addEventListener('click',() =>{
        answer = button.textContent.toLowerCase();
        
    })

})



// get value string from any of the three buttons clicked :
// set event listener on each button
// when triggered store value in  variable;