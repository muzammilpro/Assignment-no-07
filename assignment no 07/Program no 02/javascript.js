//Write a js program to find maximum between three numbers.

var firstNum = + prompt("Enter First Number:");
var secondNum = + prompt("Enter Second Number:");
var thirdNum = + prompt("Enter Third Number:");

var max;
if (firstNum > secondNum) {

    if (firstNum > thirdNum) {
        max = firstNum;
    }
    else {
        max = thirdNum;
    }
}
else if (secondNum > thirdNum) {
    max = secondNum;
}
else {
    max = thirdNum;
}
console.log("Maximum Number is:", max);