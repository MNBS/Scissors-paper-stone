function getComputerChoice(){
    let computerOption = ["Rock", "Paper", "Scissors"]; 
    return computerOption[Math.floor(Math.random() * computerOption.length)];
}

function createARound(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) { 
        return "It's a tie!"
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){ 
            computerScore += 1;
            return "You lose! Paper beat rock"; 
        }
        else { 
            playerScore += 1;
            return "You win! Rock beat scissors!"
        }
    }
    else if (playerSelection === "paper") { 
        if (computerSelection === "scissors"){ 
            computerScore += 1;
            return "You lose! Scissors beat paper"; 
        }
        else { 
            playerScore += 1;
            return "You win! Paper beat rock!"
        }
    }
    else if (playerSelection === "scissors") { 
        computerScore += 1;
        if (computerSelection === "rock"){ 
            return "You lose! Rock beat scissors"; 
        }
        else { 
            playerScore += 1;
            return "You win! Scissors beat paper!"
        }
    }
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let playAgain = document.querySelector("button");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
playAgain.addEventListener("click", resetGame);

let showResult = document.querySelector(".show-result");
let showPlayerScore = document.querySelector(".player-score");
let showComputerScore = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;
function playRound(e){
    console.log(playerScore);
    if (playerScore != 5 && computerScore != 5){
        let computerChoice = getComputerChoice();
        let result = createARound(e.target.className.toLowerCase(), computerChoice);
        let finalScore = "";
        showResult.textContent = result;
        showPlayerScore.textContent = playerScore;
        showComputerScore.textContent = computerScore;
        if (playerScore == 5 || computerScore == 5){
            if (playerScore == 5){
                finalScore = "You win!";
            }
            else {
                finalScore = "You lose";
            }
            showResult.textContent = "Game over! " + finalScore;
        }
    }
}

function resetGame(e){
    playerScore = 0; 
    computerScore = 0;
    showResult.textContent = "";
    showPlayerScore.textContent = "";
    showComputerScore.textContent = "";
}