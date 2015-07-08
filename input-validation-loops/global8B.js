var secretNum = 23;
var numGuess;

for (numGuess = prompt("Guess the secret number"), numGuess = parseInt(numGuess); secretNum != numGuess;) {
    numGuess = prompt("Wrong, guess again");
    numGuess = parseInt(numGuess);
}

alert("Correct-a-mundo");


console.log(secretNum);
console.log(numGuess);

console.log(typeof secretNum);
console.log(typeof numGuess);