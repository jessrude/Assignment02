alert(`Flip a coin!`)
let choice = prompt(`Heads or tails?`)

let randomNum = Math.round(Math.random());
let coinFlip = randomNum;



switch (choice) {
    case `heads`:
    if (randomNum < 0.5) {
    console.log("The flip was heads and you chose heads...you win!");
    }if (randomNum > 0.5) {
    console.log("The flip was tails but you chose heads...you lose!");
}
break
case `tails`:
    if (randomNum > 0.5) {
    console.log("The flip was tails and you chose tails...you win!");
 }if (randomNum < 0.5) {
    console.log("The flip was heads but you chose tails...you lose!");
}}