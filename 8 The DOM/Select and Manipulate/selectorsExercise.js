//Selectors exercise. Use 4 ways to get the FIRST <p> tag in the HTML

var p1 = document.getElementById("first");

var p2 = document.querySelector("#first");

var p3 = document.querySelector("p");

var p4 = document.querySelector(".special")

//Manipulators

//style property that contains all CSS styling properties
//To inspect options type the var.style in the console of Chrome

p1.style.color = "blue";
p1.style.fontSize = "70px"

//Rather than initializing each CSS property one at a time
//Use JS to add a Class to the tag eg

p2 = document.querySelectorAll("p")[1];
p2.classList.add("highlight");

//Can also remove a class tag.classList.remove("CSS CLASS")
//Or even Toggle it with tag.classList.toggle("CSS CLASS")

p3 = document.querySelectorAll("p")[2];
setInterval(function() {
	p3.classList.toggle("highlight");
}, 1000)

//To Change the content can use textContent
//Problem with textContent is that it removes any HTML tags written within the queried tag
//Treats any new string passed as pure text

p4 = document.querySelectorAll("p")[3];

p4.textContent = "This has been changed by JS";

//use innerHTML to change text and retain any HTML tags within the queried tag
//Treats any new stringg passed as HTML

p4.innerHTML = "This has been <strong>CHANGED</strong> by JS";