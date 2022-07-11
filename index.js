let player = 0
let computer = 0
const buttons = document.querySelectorAll('button')


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

//gets both computer and players selection
buttons.forEach(button => {
    button.addEventListener('click', () => {
        y = computerPlay()
        x = button.className
        compare(y, x)
        update(player, computer, x, y)
    })
});

function compare(computerResult, playerResult) {
    if ( computerResult === playerResult) {
        console.log("Tie")
    } else if ( computerResult == "rock" && playerResult == "scissors") {
        console.log("Computer Win")
        ++computer
    } else if ( computerResult == "scissors" && playerResult == "paper") {
        console.log("Computer Win")
        ++computer
    } else if ( computerResult == "paper" && playerResult == "rock") {
        console.log("Computer Win")
        ++computer
    } else {
        console.log("player win")
        ++player
    }
}

function update(playerScore, computerScore, selectionPlayer, selectionComputer) {
    const displayPlayerScore = document.querySelector('.playerscore')
    displayPlayerScore.textContent = `Player Score ${playerScore}`

    const displayComputerScore = document.querySelector('.computerscore')
    displayComputerScore.textContent = `Computer Score ${computerScore}`

    const playerChose = document.querySelector('.player')
    playerChose.textContent = `Player chose ${selectionPlayer}`

    const computerChose = document.querySelector('.computer')
    computerChose.textContent = `Computer Chose ${selectionComputer}`
    checkwin(playerScore, computerScore);
}

function checkwin(playerScore, computerScore) {
    if(playerScore == 5 || computerScore == 5) {
        playerScore > computerScore ? alert("Player Wins Score Has Reset") : alert("Computer Wins Score Has Reset")
        player = 0
        computer = 0
    } else {}
}