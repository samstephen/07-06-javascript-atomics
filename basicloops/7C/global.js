// store curr num in var and increment

var chorusOne = " bottles of beer on the wall, ";
var chorusTwo = " bottles of beer. Take one down and pass it around, ";
var chorusThree = " bottles of beer on the wall.";

var bottle = 99

while (bottle >= 1) {
  if (bottle == 2) { 
    chorusThree = " bottle of beer on the wall.";
  } else if (bottle == 1) { 
    chorusOne = " bottle of beer on the wall, ";
    chorusTwo = " bottle of beer. Take one down and pass it around, ";
    chorusThree = " bottles of beer on the wall.";
  }
  console.log(bottle + chorusOne + bottle + chorusTwo + (bottle - 1) + chorusThree);
  bottle--;
}

