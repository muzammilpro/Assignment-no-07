//Write a js program to input any alphabet and check whether 
//it is vowel or consonant.

var char = prompt("Enter a character:");

if (char == "a" || char == "A" || char == "e" || char == "E" 
|| char == "i" || char == "I" || char == "o" || char == "O" 
|| char == "u" || char == "U") {
    console.log("The enter alphabet is vowel.");
}
else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log("The enter alphabet is not a vowel.");
}
else {
    console.log("This is not a alphabet.");
}