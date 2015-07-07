var startNum = prompt("enter starting number.");
startNum = parseInt(startNum);
var endNum = prompt("enter ending number.");
endNum = parseInt(endNum);
var increment = prompt("enter a number to increment by.")
increment = parseInt(increment);


// first find whether we increment or decrement
// if (startNum < endNum) { // we should increment
//  while(startNum <= endNum) {
//    console.log(startNum)
//    startNum += increment;
//  }
//
// } else if (startNum == endNum) {
//   alert("Can not count.");
//
// } else { //were decrementing now
//  while (startNum >= endNum) {
//  console.log(startNum);
//  startNum -= increment;
//  }
// }


if (startNum < endNum) { // we should increment
  for (startNum; startNum < endNum; startNum += increment){
    console.log(startNum);
  }
} else if (startNum == endNum) {
  alert("Can not count.");

} else { //were decrementing now
  for (startNum; startNum >= endNum; startNum -= increment) {
    console.log(startNum);
  }
}



