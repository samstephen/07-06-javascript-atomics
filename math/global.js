/**
 * Created by samuelstephen on 7/6/15.
 */


// Collect input with prompt(), and do output with either alert() or console.log() (pick one; if you use console.log(), make sure to leave instructions in the main HTML document to check the console).

document.write("<h1>JS Atomic 05</h1>");
document.write("<h2>Instructions:</h2>");
document.write("<p>check the console!</p>");


// Prompt the user for three numbers (make sure to parse them as integers, and make sure to store each in a well-named variable)
var numOne = prompt("What's your first number?");
console.log("First number is " + numOne);
exampleOne = parseInt(numOne)
console.log(exampleOne + " is " + typeof exampleOne)



var numTwo = prompt("What's your next number?");
console.log("Second number is " + numTwo);

var numThree = prompt("What's your last number?");
console.log("Third number is " + numThree);


// Output the sum of the three numbers in a string like so: 7 + 4 + 12 = 23
var sum = parseInt(numOne) + parseInt(numTwo) + parseInt(numThree);
console.log("The sum of " + numOne + ", " + numTwo + ", and " + numThree + " is " + sum);

// Output the difference when the second and third numbers are subtracted from the first: 7 - 4 - 12 = -9
var diff = parseInt(numOne) - parseInt(numTwo) - parseInt(numThree);
console.log("The difference of " + numOne + ", " + numTwo + ", and " + numThree + " is " + diff);

// Output the product of the three numbers: 7 * 4 * 12 = 336
var product = parseInt(numOne) * parseInt(numTwo) * parseInt(numThree);
console.log("The product of " + numOne + ", " + numTwo + ", and " + numThree + " is " + product);

// Output the quotient of the first number divided by the second number: 7 / 4 = 1.75
var quotient = parseInt(numOne) / parseInt(numTwo);
console.log("The quotient of " + numOne + ", and " + numTwo + " is " + quotient);

// Output the result of incrementing the first number: 7++ = 8
incrementalAmount = parseInt(numOne);
var incrementResult = ++incrementalAmount;
console.log("The increment result of " + numOne + " is " + incrementResult);

// Output the result of decrementing the second number: 4-- = 3
decrementalAmount = parseInt(numTwo);
var decrementResult = --decrementalAmount;
console.log("The decrement result of " + numTwo + " is " + decrementResult);

