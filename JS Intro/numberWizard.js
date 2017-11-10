var guess = Number(prompt("Guess a number between 1 and 10"));

var secretNumber = 7;

if(guess === secretNumber) {
	alert("CONGRATS YOU GUESSED RIGHT!");
} else if (guess > secretNumber) {
	alert("Your guess was too high");
} else {
	alert("Your guess was too low");
}