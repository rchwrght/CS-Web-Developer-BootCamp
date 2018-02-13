var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 18,
//     temperament: "Evil"
// });


//always include a call back function when using the DB to ensure that what you want to happen has
// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong")
//     } else {
//         console.log("We just save a cat to the DB: ");
//         console.log(cat);
//     }
// });

//Second way to add new cats to the DB

// Cat.create({
//     name: "Garfield",
//     age: 15,
//     temperament: "Lovely"
// }, function(err, cat){
//     if(err){
//         console.log("Error");
//     } else {
//         console.log("Complete");
//     }
// });

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("There was an error");
        console.log(err);
    } else {
        console.log("All the cats: ");
        console.log(cats);  
    }
})