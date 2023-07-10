//I am not sure how to connect part 1 to part 2

//part 1
game = prompt('"Ready to play a game? Type "Yes" if you are!');
switch (game) {
case "Yes":
document.write("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
break;
case "No":
document.write("That's okay. Let's play another time!");
break;
default:
document.write("That's okay. Let's play another time!");
break;}

//part 2
options = prompt('Which direction would you like to head (please enter forward, left, or right)?');
switch (options) {
case "left":
document.write("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
break;
case "forward":
document.write("You walk 100 yards and safely make your way out of the cave.");
break;
case "right":
document.write("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
break;
default:
document.write("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
}

let num = Number(prompt(`GAME OVER. Please rate the game between 1 and 10.`))
if (num <= 5) {
   console.log (`Thank you for your feedback, we are working on improving the game.`)
    } else { 
   console.log(`Thank you for your feedback and please play again soon!`)
   }