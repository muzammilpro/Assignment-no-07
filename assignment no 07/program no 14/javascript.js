//Write a js program to input angles of a triangle and
// check whether triangle is valid or not.


var angle1 =+ prompt("Enter angle 1:");
var angle2 =+ prompt("Enter angle 2:");
var angle3 =+ prompt("Enter angle 3:");
var sum = angle1 + angle2 + angle3;



function triangleChecker(angle1, angle2, angle3) {

    if (sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
        return true;
    }
    else {
        return false;
    }

}

var checker = triangleChecker(angle1, angle2, angle3);

if (checker) {
    console.log("Triangle is valid.");
}
else {
    console.log("Triangle is not valid.");
}