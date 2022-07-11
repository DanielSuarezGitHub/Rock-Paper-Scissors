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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerResult = 0
      playerResult =  button.className;
       let computerResult = computerPlay()
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
    update();
    });
  });

function update(){
    const playerScore = document.querySelector('.playerscore')
  playerScore.textContent = `Player Score: ${player}`

  const computerScore = document.querySelector('.computerscore')
  computerScore.textContent = `Computer Score: ${computer}`
};
  

  
  
