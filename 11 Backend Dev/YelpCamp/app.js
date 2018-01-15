var express = require("express");
var app = express();
var bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image:"https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},    
    {name: "Granite Hill", image:"https://farm9.staticflickr.com/8456/8006869967_de2ed3e564.jpg"},    
    {name: "Goats Pass", image:"https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},    
    {name: "Mountain Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
    {name: "Some Place", image:"https://farm1.staticflickr.com/186/426030221_41eecb5df4.jpg"}, 
    {name: "Salmon Creek", image:"https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},    
    {name: "Granite Hill", image:"https://farm9.staticflickr.com/8456/8006869967_de2ed3e564.jpg"},    
    {name: "Goats Pass", image:"https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},    
    {name: "Mountain Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
    {name: "Some Place", image:"https://farm1.staticflickr.com/186/426030221_41eecb5df4.jpg"},  
    {name: "Salmon Creek", image:"https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},    
    {name: "Granite Hill", image:"https://farm9.staticflickr.com/8456/8006869967_de2ed3e564.jpg"},    
    {name: "Goats Pass", image:"https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},    
    {name: "Mountain Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
    {name: "Some Place", image:"https://farm1.staticflickr.com/186/426030221_41eecb5df4.jpg"}  
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
   res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp server has started!") ;
});