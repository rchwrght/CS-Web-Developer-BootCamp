//Print everynumber from -10 to 19
var x = -10;
while (x < 20) {
	console.log(x);
	x++;
}

//print every even number from 10 to 40
var y = 10;
while (y <= 40){
	console.log(y);
	y+=2;
}

//print every odd number from 300 to 333
var z = 300;
while (z < 334){
	if(z % 2 !== 0){
		console.log(z);
	}
	z++;
}

//print every number divisible by 5 AND 3 between 5 and 50
var a = 5;
while (a <= 50) {
	if (a % 3 === 0 && a % 5 ===0) {
		console.log(a);
	}
	a++;
}

//now to do them as For Loops
for(var i = -10; i < 20; i++){
	console.log(i);
}

for(var i = 10; i <= 40; i+=2){
	console.log(i);
}

for(var i = 300; i <= 333; i++){
	if(i % 2 !== 0){
		console.log(i);
	}
}

for(var i = 5; i <= 50; i++){
		if (i % 3 === 0 && i % 5 ===0) {
		console.log(i);
	};
}