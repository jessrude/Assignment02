alert(`Let\`s play rock, paper, scissors.`)
let choice = prompt(`Enter your choice: rock, paper, or scissors.`)
switch (choice) {
     case `rock`:
        console.log(`You chose rock!`)
        break
    case `paper`:
       console.log (`You chose paper!`)
       break
    case `scissors`:
        console.log(`You chose scissors!`)
         break

    default: 
       console.log(`You didn\`t choose a valid option.`) }