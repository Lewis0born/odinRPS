
// Rock Paper Scissor game

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerSelection, compChoice){
    let playerChoice = playerSelection.toUpperCase();
    if(playerChoice == "ROCK" && compChoice == "Rock"){
        return "Its a draw! Both chose Rock!";
    } else if(playerChoice == "PAPER" && compChoice == "Rock") {
        return "You win! Paper beats Rock";
    } else if(playerChoice == "SCISSORS" && compChoice == "Rock"){
        return "You lose! Rock beats Scissors";
    } else if(playerChoice == "ROCK" && compChoice == "Paper"){
        return "You lose! Paper beats Rock";
    } else if(playerChoice == "ROCK" && compChoice == "Scissors"){
        return "You win! Rock beats Scissors";
    } else if(playerChoice == "PAPER" && compChoice == "Paper"){
        return "Its a draw! Both chose Paper!"; 
    } else if(playerChoice == "SCISSORS" && compChoice == "Scissors"){
        return "Its a draw! Both chose Scissors!";
    } else if(playerChoice == "SCISSORS" && compChoice == "Paper"){
        return "You win! Scissors beats Paper";
    } else if (playerChoice == "PAPER" && compChoice == "Scissors"){
        return "You lose! Scissors beats Paper";
    }
}


function game(){
    for(let x = 0; x < 5; x++){
        let playChoice = prompt("Pick rock paper or scissors...");
        let compChoice = getComputerChoice();
        console.log(playRound(playChoice, compChoice));

    }
}

game();
