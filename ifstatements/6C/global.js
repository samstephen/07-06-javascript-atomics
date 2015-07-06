var secretNum = 73;

var userNum = prompt("What is the secret number????");
userNum = parseInt(userNum);

if (secretNum === userNum) {
  alert("That is correct");
} else {
  alert("Sorry, the number is actually " + secretNum);

}