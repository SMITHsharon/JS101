// switch statement
var day = "Friday";

switch(day) {
	case "Monday": 
		console.log("Booooooo");
	case "Friday":
		console.log("PARTAY");
	default: 
		console.log("not monday");
}



// ARRAYS
var fruit = ["cherries", "apples", "bananas"];
console.log("fruit array", fruit);
var fruitString = fruit.join(", ");
console.log("fruitString", fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);

var catColorsArray = catColors.split("yellow");
console.log("catColorsArray", catColorsArray);

var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9, 6, 8, 2, 4, 11, 66]; //2,4,6,8,9,11,66
var numSort = nums.sort();
console.log("numSort", numSort); // does not work
var numSort = nums.sort(
	function(a,b) {
		return a-b;
	}
);
console.log("numSort", numSort);

// OR //
var numSort = nums.sort(function(a,b) {return a-b;});
console.log("numSort", numSort);

var mixedCrap = ["r", "m", 33, 3, 9];
console.log("????", mixedCrap.sort());


var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("fish index: ", animals.indexOf("fish"));

var animals2 = animals.slice(2,4); // ["fish", "bears"]
console.log("animals2 :: ", animals2);

// modifying the original array, so don't need to declar a var
animals.splice(1,1);
console.log("array wo turtles :: ", animals);


// chaining methods together

var colors = ["red", "blue", "gold", "pink", "orange"];

// sort, reverse, then/make a string
var finalAnswer = colors.sort().reverse().join(" cat ");

// red cat pink cat orange cat gold cat blue

console.log("array sorted / reversed / then CAT-joined :: ", finalAnswer);

















