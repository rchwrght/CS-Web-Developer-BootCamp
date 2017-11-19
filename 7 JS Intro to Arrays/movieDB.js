var movies = [
	{
		name: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Frozen",
		rating: 4,
		hasWatched: false
	},
	{
		name: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Les Miserables",
		rating: 1,
		hasWatched: false
	},
]

for(var i = 0; i < movies.length; i++){
	if(movies[i].hasWatched) {
		console.log("You have watched " + movies[i].name + " - " + movies[i].rating + " stars");
	} else {
		console.log("You have not seen " + movies[i].name + " - " + movies[i].rating + " stars");
	}
}

movies.forEach(function(movie){
	var result = "You Have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
})