 var userNumber = prompt(`Please pick a number between 1-100`);
 var validNumber = false;
while (validNumber == false) {
     if (parseInt(userNumber) > 0 && parseInt(userNumber) <= 100){
         validNumber = true;
   } else {
       validNumber = false
       userNumber = prompt(`That number is not valid. Please pick a number between 1-100`);
     }
    }
userNumber = parseInt(userNumber);
if (userNumber < 60) {
     console.log(`You received an F`);
 } else if (userNumber >= 60  && userName <= 69){
     console.log(`You received a D`);
 } else if (userNumber >= 70 && userNumber <= 79) {
     console.log(`You received a C`);
 }  else if (userNumber >= 80 && userNumber <= 89) {
     console.log(`You received a B`);
 }  else if (userNumber >= 90 && userNumber <= 100) {
     console.log(`You received a A`);
 }
