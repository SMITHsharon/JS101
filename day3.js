// OBJECTS

var myCat = {
	tail: "long",
	age: 29, 
	color: "blue",
	friends: ["zoe", "callan", "lauren"]
}

console.log("myCat before", myCat);

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for (var myKey in myCat) {
	console.log("myKey", myKey);
	console.log("values", myCat[myKey]);
}



// FUNCTIONS
var nuggetElement = document.getElementById("nuggetShack");
var availElement = document.getElementById("availForPurchase");
console.log("nuggetElement ::", nuggetElement);
console.log("availElement ::", availElement);

function nuggetMaker(animal) {
	var myNugget = "breading " + animal + " breading ";
	return myNugget;
}

function addBr(){
	return "<br>"
}

function shackMaker (divLocation, divText) {
	var newBreak = addBr();
	divLocation.innerHTML += divText + newBreak;
}



var chickenNuggets = nuggetMaker("chicken");
// console.log("chickentNuggets :: ", chickenNuggets);
// nuggetElement.innerHTML = chickenNuggets;
shackMaker(availElement, chickenNuggets);

var lobsterNuggets = nuggetMaker("lobster");
// console.log("lobsterNuggets :: ", lobsterNuggets);
// nuggetElement.innerHTML += lobsterNuggets;
shackMaker(availElement, lobsterNuggets);

var tablets = nuggetMaker("myComputer");
// console.log("tabletNuggets :: ", tablets);
// nuggetElement.innerHTML += tablets;
shackMaker(availElement, tablets);

var shackName = "Callan's Shack";
// nuggetElement.innerHTML += shackName;
shackMaker(nuggetElement, shackName);



function myLooper(myArray) {
	for (var i=0; i<myArray.length; i++) {
		console.log(myArray[i]);
	}
}


var animals = ["cats", "turtles", "fish", "bears", "tigers"]; 
myLooper(animals);

var colors = ["red", "blue", "gold", "pink", "orange"]; 
myLooper(colors);



