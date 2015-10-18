////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move = getInput();
    if (move === null) {
        getInput();
    } else {
        console.log("player chooses " + move);
        playerMove = move;
        getComputerMove();
    } 

}

function getComputerMove(move) {
    var move = randomPlay();
    if (move === null || 0) {
        randomPlay();
    } else {
        console.log("computer chooses " + move);
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("Looks like we have a tie!");
        return winner;
    } 
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else {
        getInput();
    }
    console.log("Looks like the " + winner + " wins!");
    return winner;
}

function playToFive() {
console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i=0; i<100; i++) {
        if (playerWins === 5 || computerWins === 5) {
            console.log("FINAL SCORE: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            break;
        } 
        else 
        {
            if (winner === "player") 
            {
             playerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            } 
            else if (winner === "computer") 
            {
             computerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            }
        getPlayerMove();    

        }
    }
}

