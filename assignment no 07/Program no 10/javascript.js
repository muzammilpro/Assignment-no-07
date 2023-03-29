//Write a js program to check whether a
// character is uppercase or lowercase alphabet.

var char = prompt("Enter a Character:");

function charactercheck (char) {
    if ((char >= 'A') && (char <= 'Z')){
        console.log("This is upper case Character.");
    }
    else if ((char >= 'a') && (char <= 'z')){
        console.log("This is lower case Character.");
    }
    else{
        console.log("This is not a Character.");
    }
    
}
charactercheck(char);
