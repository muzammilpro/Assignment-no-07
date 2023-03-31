//Write a js program to input all sides of a triangle 
//and check whether triangle is valid or not.

var side1 = + prompt("Enter first side:");
var side2 = + prompt("Enter second side:");
var side3 = + prompt("Enter third side:");
var checker;

function triangleChecker(side1, side2, side3) {
    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
        return true;
    } else {
        return false;
    }

}

triangleChecker(side1, side2, side3);

if (triangleChecker) {
    console.log("Valid");
}
else {
    console.log("Not valid.");
}