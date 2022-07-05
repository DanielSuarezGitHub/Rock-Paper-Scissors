function computerPlay() {
 x = Math.floor(Math.random() * 100);
 if (x < 33) {
   return "paper"
 } else if (x < 66) {
    return "scissors"
 } else {
    return "rock"
 }
}

function playerSelection() {
    
}
