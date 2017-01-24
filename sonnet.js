// Paste the code below into your HTML file.

// Take the contents of the sonnet div and place it in a variable
var element = document.getElementById("sonnet"); 
// .innerHTML ; wrap this part to next line => assign

var sonnet = element.innerHTML;

console.log(sonnet);

// Find and output the starting position of the word "orphans"
var string = "orphans";
var startIndex = sonnet.indexOf("orphans");
console.log("Start position of orphans = ", startIndex);

// Output the number of characters in the sonnet
var numChars = sonnet.length;
console.log("Number of characters in the sonnet =", numChars);

// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnet.replace("winter", "yuletide");
console.log("Sonnet with replaced word: ", newSonnet);

// Replace all occurances of the string "the" with "a large"
// Did this exactly as specified, so replaced "the" occurences, even inside other strings, 
// and did not catch occurences of "The"
var newSonnet = newSonnet.replace(/the/g, "a large");
console.log("Sonnet with replaced string", newSonnet);

// Set the content of the sonnet div with the new string
element.innerHTML = newSonnet;

