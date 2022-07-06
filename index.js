let computer = 0
let player = 0

function computerPlay() {
let x = Math.floor(Math.random() * 100);
 if (x < 33) {
   return "paper"
 } else if (x < 66) {
    return "scissors"
 } else {
    return "rock"
 }
}

function playerSelection() {
    let y = prompt("Rock Paper Scissors").trim().toLowerCase();
    return y
}

// 2 = player win 1 = computer win
function game() {
    let computerResult = computerPlay();
    let playerResult = playerSelection();
    console.log(computerResult, playerResult);
    if ( computerResult === playerResult) {
        return 0
    } else if ( computerResult == "rock" && playerResult == "scissors") {
        return 1
    } else if ( computerResult == "scissors" && playerResult == "paper") {
        return 1
    } else if ( computerResult == "paper" && playerResult == "rock") {
        return 1
    } else {
        return 2
    }
}

function playGame(){
for (let i = 0; i < 5; i++) {
    let gameCounter = game();
    if (gameCounter === 2){
        player = ++player
    } else if (gameCounter === 1) {
        computer = ++computer
    }
    gameCounter = 0;
 }
}

playGame()

if (player > computer) {
    console.log("Player Wins")
} else if (computer > player) {
    console.log("Computer Wins")
} else {
    console.log("Tie")
}