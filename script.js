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
    let computerChoice = computerSelection();

    if (playerSelection === "rock" && computerChoice === "paper") {
        computerScore++
        // return "You Loose paper  beats rock !";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        playerScore++
        // return "You Win rock beats scissors ! "
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        computerScore++
        // return "You Loose scissors beats paper !"
    }

    else if (playerSelection === "paper" && computerChoice === "rock") {
        playerScore++
        // return "You Win paper beats rock ! "
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        computerScore++
        // return "You Loose rock beats scissors! "
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        playerScore++
        // return "You Win scissors beats paper !"
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
        playRound(answer,getComputerChoice)        
    })

})



// get value string from any of the three buttons clicked :
// set event listener on each button
// when triggered store value in  variable;