// 1. How many hours are in a year
var hours = 365*24;
console.log("1. # hours in a year =", hours);

// 2. How many minutes are in a decade
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
var minutesInDecade = minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade;
console.log("2. # minutes in a decade =", minutesInDecade);

// 3. How many seconds old they are
// age = 42 years
var ageInputInYears = 42;
var secondsPerMinute = 60;
var ageInSeconds = secondsPerMinute*minutesPerHour * hoursPerDay * daysPerYear * ageInputInYears;
console.log("3. Arbitrary Person's age in seconds =", ageInSeconds);

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
var ageFlag = 21;
if (ageInputInYears > ageFlag) {
	console.log("I'm old");
} else {
	console.log("I'm young");
}
