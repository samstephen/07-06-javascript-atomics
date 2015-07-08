var checkLeg;

for (checkLeg = true; checkLeg;) {
  var firstLeg = prompt("Enter a positive number for side 1");
  var secondLeg = prompt("Enter a positive number for side 2");
  var thirdLeg = prompt("Enter a positive number for side 3");

  firstLeg = parseInt(firstLeg);
  secondLeg = parseInt(secondLeg);
  thirdLeg = parseInt(thirdLeg);
  
  if ((firstLeg + secondLeg) < thirdLeg) {
    console.log(firstLeg + " + " + secondLeg + " < " + thirdLeg);
    alert("This is not a valid triangle.");
    checkLeg = true;
    
   } else if ((secondLeg + thirdLeg) < firstLeg) {
    console.log(secondLeg + " + " + thirdLeg + " < " + firstLeg);
    alert("This is not a valid triangle.");
    checkLeg = true;
    
  } else if ((firstLeg + thirdLeg) < secondLeg) {
    console.log(firstLeg + " + " + thirdLeg + " < " + secondLeg);
    alert("This is not a valid triangle.");
    checkLeg = true;
  
 
  
  } else {
    alert("This is a triangle");
    checkLeg = false;
  }
}