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

