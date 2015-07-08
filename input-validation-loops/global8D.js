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
    alert("These sides do not make a triangle.");
    checkLeg = true;
    
   } else if ((secondLeg + thirdLeg) < firstLeg) {
    console.log(secondLeg + " + " + thirdLeg + " < " + firstLeg);
    alert("These sides do not make a triangle.");
    checkLeg = true;
    
  } else if ((firstLeg + thirdLeg) < secondLeg) {
    console.log(firstLeg + " + " + thirdLeg + " < " + secondLeg);
    alert("These sides do not make a triangle.");
    checkLeg = true;
  
 
  
  } else {
    alert("This is a bodacious triangle");
    checkLeg = false;
  }
}