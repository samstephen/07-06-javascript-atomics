/*
Write a program which prompts your user for the lengths of the 3 legs of a triangle
(this input can be an integer or a floating point number, but it can't be a string),
and which then reports whether this is a valid triangle. 
It's probably worthwhile to output the results of your behind-the-scenes calculations to the console,
 but the ultimate output ("This is a valid triangle" or "This is not a valid triangle" should be handled with an alert).
*/

var valid = "This is a valid triangle";
var invalid = "This is not a valid triangle";
var invalidInput = "Not proper input";

var firstLeg = prompt("Make a triangle, Enter First leg's length: ");
firstLeg = parseFloat(firstLeg);
console.log(firstLeg);

var secondLeg = prompt("Enter Second leg's length: ");
secondLeg = parseFloat(secondLeg);
console.log(secondLeg);

var thirdLeg = prompt("Enter Third leg's length: ");
thirdLeg = parseFloat(thirdLeg);
console.log(thirdLeg);


/*
For all triangles, the sum of the lengths of any two sides must be greater than the length of the third side. 
For example: a triangle of 3, 4, 5 (in whatever units you want) is valid (since 3 + 4 > 5, 3 + 5 > 4, and 4 + 5 > 3),
whereas a triangle of 3, 4, 7 is not (since 3 + 4 is not greater than 7).
*/

/*
program now tests for nan on all legs & for nil/negative values of legs
*/

if ( firstLeg <= 0 | isNaN(firstLeg) || secondLeg <= 0 | isNaN(secondLeg) || thirdLeg <= 0 | isNaN(thirdLeg) ) {
    alert(invalidInput);
} else if (thirdLeg < (firstLeg + secondLeg) || firstLeg < (thirdLeg + secondLeg) || secondLeg < (thirdLeg + firstLeg)) {
    alert(valid);
} else {
    alert(invalid);
}
