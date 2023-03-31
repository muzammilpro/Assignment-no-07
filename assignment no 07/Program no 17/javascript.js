//Write a js program to find all roots of a quadratic equation.

var a = parseFloat(prompt("Enter the value of a:"));
var b = parseFloat(prompt("Enter the value of b:"));
var c = parseFloat(prompt("Enter the value of c:"));

var checker = (b * b - 4 * a * c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
   alert("Invalid input. Please enter valid numbers.");
} else if (checker < 0) {
   console.log("The roots are imaginary numbers.");
} else if (checker == 0) {
   let root1 = (-b / (2 * a));
   let root2 = (-b / (2 * a));
   console.log("The roots are: " + root1 + ", " + root2);
} else {
   let root1 = ((-b + Math.sqrt(checker)) / (2 * a));
   let root2 = ((-b - Math.sqrt(checker)) / (2 * a));
   console.log("The roots are: " + root1 + ", " + root2);
}