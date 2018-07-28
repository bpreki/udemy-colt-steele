var secNum = 6;
var guess = prompt("guess a number");

if(Number(guess === secNum)){
  alert("well done your Guess is correct ")
}
else if  (guess < secNum){

prompt("your guess was too high")

} else {
  alert("Too low guess again!!")
}
