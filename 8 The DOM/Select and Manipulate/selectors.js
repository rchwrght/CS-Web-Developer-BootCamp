//Use to select your singular ID tag from HTML
var tag = document.getElementById("highlight");

//Use to select your multiple Class tags from HTML
var tags = document.getElementsByClassName("bolded");

//Use to select your multiple HTML tags
var tags2 = document.getElementsByTagName("li");

//A way to select the whole Body.
//As this selector returns a list have to specifiy we only want the first item
var body = document.getElementsByTagName("body")[0];

//**NEW** Selector. Takes the arugement that mirrors a valid CSS selector
var tag3 = document.querySelector("#highlight");
//Will only select the first matching element
var tags4 = document.querySelector(".bolded");
var tags5 = document.querySelector("h1");

//**NEW** Selector
//Works the same as the previous selector but returns all valid objects not just the first
var tags6 = document.querySelectorAll("h1");