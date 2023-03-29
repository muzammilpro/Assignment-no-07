//Write a js program to input any character and check whether it is alphabet, 
//digit or special character.

var char = prompt("Enter a character:")

if ( char >= "a" || char >= "A" ) {
    console.log("It is an alphabet.");
}
else if (char >= 0 || char<= 0) {
    console.log("It is a digit.");
}
else{
    console.log("It is a special character.");
}