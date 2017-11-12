// function isEven(x) {
// 	if(x % 2 === 0){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function isEven(x) {
	return x % 2 === 0;
}


function factorial(x) {
	var answer = 1;
	for(i = 2; i <= x; i++) {
		answer *= i;
	}
	return answer;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}