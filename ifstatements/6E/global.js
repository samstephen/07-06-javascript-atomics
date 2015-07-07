

// 6D: Driver's Ed, Part 2

// This exercise is pretty similar to Part 1, but in this case you'll only display one message depending on the range your user's age falls into:
var userAge = prompt("What's your age?");
userAge = parseInt(userAge);

console.log("User is " + userAge + ".");

var nanAge    = "Sorry, but that's not a number.";
var unborn    = "You haven't been born yet.";
var cantDrive = "You can't drive yet, but you'll be able to in a few years.";
var driverAge = "You're eligible for a driver's license.";
var drinkAge  = "Please don't drink and drive.";
var rentAge   = "You can rent a car.";


// All of your program logic (i.e. the part that decides which output to display) should be contained in a single if / else if / else block, rather than in separate if statements.

if (userAge >= 25)			{
	console.log(rentAge + " " + drinkAge + " " + driverAge);
} else if (userAge >= 21)	{
	console.log(drinkAge + " " + driverAge);
} else if (userAge >= 16)	{
	console.log(driverAge);
} else if (userAge >= 0)	{
	console.log(cantDrive);
} else if (isNaN(userAge))	{
	console.log(nanAge);
} else 						{
	console.log(unborn);
}


// Does it matter what order your if / else if statements happen? If you reorder them, does your program still produce correct output?
// What's wrong with this conditional: if (age < 16 && age > 21)?
// Let's say that your program needs to be easy to modify so that it works in parts of the country/world where the age ranges are different. How would you replace the numbers in your if statements with variables to make the program make sense? Or is it easier to just have the numbers be there? Does it matter?





