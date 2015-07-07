var count = 1;
var start = prompt("enter a num, dirtbag!")
var end = prompt("do it again, chicken wang!")



while (start <= end) {
  if (start % 3 == 0 && start % 5 == 0) {
    console.log("fizzbuzz");
  } else if (start % 3 == 0) {
    console.log("fizz");
  } else if (start % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(start);
  }
  start++;
}