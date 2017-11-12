var age = 64;


if (age < 0) {
	console.log("Your age is not possible");
} else if(age < 18) {
	console.log("You cannot come in");
} else if (age < 21) {
	console.log("You may enter, but cannot drink");
} else if (age === 21) {
	console.log("Happy 21st Birthday have a free shot!");
} else {
	console.log("Come on in, do what you want!");
}

if (age % 2 !== 0) {
	console.log("Your age is odd!");
}

if(Number.isInteger(Math.sqrt(age))) {
	console.log("perfect square!");
}