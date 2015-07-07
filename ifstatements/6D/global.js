/**
 * Created by samuelstephen on 7/6/15.
 */

var nanAge    = "Sorry, but that's not a number.";
var unborn    = "You haven't been born yet.";
var cantDrive = "You can't drive yet, but you'll be able to in a few years.";
var driverAge = "You're eligible for a driver's license.";
var drinkAge  = "Please don't drink and drive.";
var rentAge   = "You can rent a car.";

//Prompt the user for their age and store it in a variable, then display any and all applicable messages below:

var userAge = prompt("What's your age?");
userAge = parseInt(userAge);

if (isNaN(userAge)) {
	console.log(nanAge);
}
if (userAge >= 25)	{
	console.log(rentAge);
}
if (userAge >= 21)	{
	console.log(drinkAge);
}
if (userAge >= 16)	{
	console.log(driverAge);
}
if (userAge  < 16)	{
	console.log(cantDrive);
}
if (userAge  <  0)  {
	console.log(unborn);
}


<<<<<<< Local Changes
<<<<<<< Local Changes

 if userAge >= 21 {
   console.log("Please don't drink and drive");
 }
 
 if userAge >= 25 {
   console.log("You can rent a car");
 
 if userAge >= 16 {
   console.log("You're eligible for a driver's license");
 }
 
 if userAge < 16 {
   console.log("You can't drive yet, but you'll be able to in a few years");
 }
 
 if userAge < 0 {
   console.log("You haven't been born yet");
 }
 
 if (userAge = NaN) {
   console.log("Sorry, but that's not a number");
 }
 

=======
>>>>>>> External Changes
=======
>>>>>>> External Changes
// For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

// These messages can be displayed as alerts or as logs to the console.

// You will not need to use else or else if in this exercise.




// userAge >= 21   & console.log(drinkAge);
// userAge >= 16   & console.log(driverAge);
// userAge  < 16   & console.log(cantDrive);	
// userAge <= 0    & console.log(unborn);
// userAge  = NaN  & console.log(nanAge);


/**
 * Created by samuelstephen on 7/6/15.
 */

// 6D: Driver's Ed, Part 2


//Prompt the user for their age and store it in a variable, then display any and all applicable messages below:


/**
 * 
 * var userAge = prompt("What's your age?");
 * userAge = parseInt(userAge);
 * 
 * console.log("User is " + userAge + ".");
 * 
 * if (userAge >= 25 ) {		// Age 25 and older: "You can rent a car"
 * 	console.log("You can rent a car");
 * 	console.log("Please don't drink and drive");
 * 	console.log("You're eligible for a driver's license");
 * } else if (userAge >= 21) {	// Age 21 and older: "Please don't drink and drive"
 * 	console.log("Please don't drink and drive");
 * 	console.log("You're eligible for a driver's license");
 * } else if (userAge >= 16) {	// Age 16 and older: "You're eligible for a driver's license"
 * 	console.log("You're eligible for a driver's license");
 * } else if (userAge >= 0) {	// Age 0 - 15: "You can't drive yet, but you'll be able to in a few years"
 * 	console.log("You can't drive yet, but you'll be able to in a few years");
 * } else if (userAge < 0 ) {	// Any negative number: "You haven't been born yet"
 * 	console.log("You haven't been born yet");
 * } else { 					// NaN: "Sorry, but that's not a number"
 * 	console.log("Sorry, but that's not a number");
 * }
 *
 */

// For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

// These messages can be displayed as alerts or as logs to the console.

// You will not need to use else or else if in this exercise.

























