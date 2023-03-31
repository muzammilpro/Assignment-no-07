//. Write a js program to check whether the triangle is equilateral,
// isosceles or scalene triangle.


//Equilateral triangle: All three sides are equal.
// Isosceles triangle: All two sides are equal.
// Scalene triangle: No sides are equal.

var side1 = + prompt("Enter first side:")
var side2 = + prompt("Enter second side:")
var side3 = + prompt("Enter third side:")

function trianglechecker(side1, side2, side3) {
    if (side1 == side2 == side3) {
        console.log("This is Equilateral triangle.");
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
        console.log("This is Isosceles triangle.");
    }
    else {
        console.log("This is Scalene triangle.");
    }

}
trianglechecker(side1, side2, side3);