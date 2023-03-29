//Write a js program to check whether a character is alphabet or not.

var char = prompt("Enter a character:");
if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log("It is a character.");
}
else {
    console.log("It is not a character.");
}