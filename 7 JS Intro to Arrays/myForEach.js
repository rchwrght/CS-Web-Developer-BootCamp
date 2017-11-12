function myForEach(arr, func){
	//loop through the array
	for(var i = 0; i < arr.length; i++){
		//calling the function on each item in the array
		func(arr[i]);
	}
}