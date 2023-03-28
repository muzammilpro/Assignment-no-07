//Write a js program to check whether a number is divisible by 5 and 11 or not.

var num = + prompt("Enter a number:");

if (num % 5 == 0) {

    if (num % 11 == 0) {
        console.log("Number is divisivle by 5 and 11.");
    }
    else {
        console.log("Number is divisivle by 5.");
    }
}
else if (num % 11 == 0) {
    console.log("Number is divisivle by 11.");
}

else {
    console.log("Number is not divisivle by 5 and 11.");
}