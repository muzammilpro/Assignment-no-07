//Write a js program to calculate profit or loss.
// profit = sellPrice - costPrice

var sellPrice =+  prompt("Enter sell price:");
var costPrice =+  prompt("Enter cost price:");
var profit;
profit = sellPrice - costPrice;

if (profit > 0) {
    console.log("You get profit.");
}
else if (profit < 0) {
    console.log("You get loss.");
}
else if (profit == 0 ){
    console.log("You get neither profit or loss!");
}
else{
    console.log("Invalid input.");
}


