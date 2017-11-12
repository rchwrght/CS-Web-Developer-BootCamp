function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var control = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== arr[0]) {
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(num){
		sum += num;
	});
	return sum;
}

function max(arr) {
	var control = arr[0];
	for(var i = 1; i < arr.length; i++){
		if (arr[i] > control){
			control = arr[i];
		}
	}
	return control;
}