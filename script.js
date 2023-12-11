const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const computerChoiceDiv = document.querySelector("#computerChoice");
const roundResultDiv = document.querySelector("#roundResult");

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
    computerChoiceDiv.textContent = "the computer played : " + computerChoice;

    if (playerSelection === "rock" && computerChoice === "paper") {
        computerScore++;
        roundResultDiv.textContent="You Loose paper  beats rock !";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        playerScore++;
        roundResultDiv.textContent="You Win rock beats scissors ! "
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundResultDiv.textContent="You Loose scissors beats paper !"
    }

    else if (playerSelection === "paper" && computerChoice === "rock") {
        playerScore++;
        roundResultDiv.textContent="You Win paper beats rock ! "
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundResultDiv.textContent="You Loose rock beats scissors! "
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        playerScore++;
        roundResultDiv.textContent="You Win scissors beats paper !"
    }

    else if (playerSelection === computerChoice) {
        roundResultDiv.textContent="It's a tie ! Please replay this Round!";
    }

}



const buttonWrapper = document.querySelector("#buttonWrapper");
const buttonArray = Array.from(buttonWrapper.children);

function playGame(e){
    let answer;
    answer = e.currentTarget.textContent.toLowerCase();
    playRound(answer,getComputerChoice);
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;  
}

buttonArray.forEach(button =>{
    button.addEventListener('click',playGame)

})



// get value string from any of the three buttons clicked :
// set event listener on each button
// when triggered store value in  variable;