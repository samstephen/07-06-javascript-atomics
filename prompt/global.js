/**
 * Created by samuelstephen on 7/6/15.
 */

// Write Javascript that accomplishes the following tasks, in order:

// Ask the user (using prompt()) for their name, then assign that value to a well-named variable.
var name = prompt("What's you're name?");
console.log("User name is " + name);

// Ask the user (using prompt()) for their age, then assign that value to a well-named variable.
var age = prompt("Hi, " + name + ". Please enter your age.");
console.log(age);

// Ask the user (using prompt()) for their hometown, then assign that value to a well-named variable.
var homeTown = prompt("Enter hometown");
console.log(homeTown);

// Ask the user (using prompt()) for their favorite number, then assign that value to a well-named variable.
var favNum = prompt("Enter favorite number");
console.log(favNum)
console.log("The data-type of favNum is a "+ typeof favNum + ".");
console.log("I'll define a variable to make an integer out of favNum.");
var num1 = parseInt(favNum);
console.log("The data-type of num1 is now a "+ typeof num1 + ".");


// Output each of those values using both console.log() and alert(). You can output the value itself with no context around it, but it's a better decision to use each of those values in a sentence. For example: "Your name is Aloysius."


// Once you're done with the Javascript tasks, answer these questions in the body of your HTML file (formatted however makes the most sense -- maybe similar to how you've been doing it for previous atomics):

document.write("<h2>What is the data-type (e.g. string or integer) of the information that comes in? What happens if the user inputs a number -- does it stay an integer? Use typeof and console.log() to help with this.</h2>")
document.write("<p>The data-type that is the user's input is a string. You can change the data-type of a variable's value by parsing. </p>")
