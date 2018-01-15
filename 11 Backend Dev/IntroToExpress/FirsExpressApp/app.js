var express = require("express");

var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
   res.send("Hi There!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!!");
});

//how large sites like reddit work
app.get("/r/:subredditName", function(req,res) {
    var subreddit = req.params.subredditName;
   res.send(subreddit.toUpperCase() + " info");
});

//using the '*' function to capture all other routes, always put last
app.get("*", function(req, res) {
   res.send("Your are a star!!"); 
});

//Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});