var express = require("express");
var app = express();


//Creating index response
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


//Making animals speak


app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var animals = {
        pig: {
            noise: "Oink",
            color: "brown"
        },
        cow: {
            noise: "Moo",
            color: "white"
        },
        dog: {
            noise:"Woof Woof",
            color: "yellow"
        },
        fish: {
            noise: '...',
            color: "gold"
        },
        cat: {
            noise: 'I hate you human',
            color: "tabby"
        }
    };
    var sound = animals[animal].noise;
    res.send("The " + animal + " says '" + sound + "' and is " + animals[animal].color);
});


//repeating a word n number of times
app.get("/repeat/:word/:number", function(req, res){
  var number = Number(req.params.number);
  var word =req.params.word;
  var print = "";
  for(var i = 0; i < number; i++){
      print += word + " ";
  }
  res.send(print);
});


//404 error
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});


//creating server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});