let randomNum = Math.round(Math.random(.5));
let coinFlip = randomNum;

alert(`Let\`s flip a coin.`)
let choice = prompt(`Heads or tails?`)

switch (choice) {
    case `heads`:
        console.log(`The flip was heads and you chose heads...you win!`)
        break
    case `tails`:
       console.log (`The flip was heads but you chose tails...you lose!`)
       break
    case `heads`:
        console.log(`The flip was tails but you chose heads...you lose!`)
        break
    case `tails`:
       console.log (`The flip was tails and you chose tails...you win!`)
       break
}