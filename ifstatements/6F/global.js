console.log( "5 == '5' is " + (5 == '5') ); //true
console.log( "5 == 'five' is " + (5 == 'five') );
console.log( "5 == '6' is " + (5 == '6') );
console.log( "5 === '5' is " + (5 === '5') );
console.log( "5 == 2 + 3 is " + (5 == 2 + 3) );
console.log( "5 == 5 is " + (5 == 5) );
console.log( "5 === 5 is " + (5 === 5) );
console.log( "true == 'true' is " + (true == 'true') );
console.log( "true === 'true' is " + (true === 'true') );
console.log( "true == false is " + (true == false) );
console.log( "5 == 12 is " + (5 == 12) );
console.log( "5 !== 12 is " + (5 != 12) );
console.log( "5 < 12 is " + (5 < 12) );
console.log( "5 <= 12 is " + (5 <= 12) );
console.log( "5 > 12 is " + (5 > 12));
console.log( "5 >= 12 is " + (5 >= 12));

var password = "monkeybrains";

var userPassword = prompt("What is the password");

if (password === userPassword) {
  alert("That is correct");
} else {
  alert("Sorry, the password is actually " + password);

}