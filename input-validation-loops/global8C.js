var numGuess;
for (numGuess = prompt("Please enter a number between 1 and 8"), numGuess = parseInt(numGuess); numGuess < 9 && numGuess > 0;) 
{
    numGuess = prompt("Enter another number(Enter a number greater than 8 to stop.)");
    numGuess = parseInt(numGuess);
}

alert("Correct-a-mundo");