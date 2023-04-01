// Write a js program to input marks of five subjects Physics, 
// Chemistry, Biology, Mathematics and Computer. 
// Calculate percentage and grade according to following:

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var Physics = + prompt("Enter thr marks of Physics:");
var Chemistry = + prompt("Enter thr marks of Chemistry:");
var Biology = + prompt("Enter thr marks of Biology:");
var Mathmatics = + prompt("Enter thr marks of Mathmatics:");
var Computer = + prompt("Enter thr marks of Computer:");

var sum = (Physics + Chemistry + Biology + Mathmatics + Computer);
var percentage = ((sum * 100) / 500);

if (percentage >= 90) {
    console.log(percentage + "%" + " and Grade A");
}
else if (percentage >= 80) {
    console.log(percentage + "%" + " and Grade B");
}
else if (percentage >= 70) {
    console.log(percentage + "%" + " and Grade C");
}
else if (percentage >= 60) {
    console.log(percentage + "%" + " and Grade D");
}
else if (percentage >= 40) {
    console.log(percentage + "%" + " and Grade E");
}
else if (percentage < 40) {
    console.log(percentage + "%" + " and Grade F");
}
else {
    alert("Invalid Input!");
}