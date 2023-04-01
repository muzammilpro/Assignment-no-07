// Prompt user for input
var units = parseFloat(prompt("Enter electricity units consumed: "));

// Calculate bill
var bill = 0;
if (units <= 50) {
  bill = units * 0.5;
} else if (units <= 150) {
  bill = 25 + (units - 50) * 0.75;
} else if (units <= 250) {
  bill = 100 + (units - 150) * 1.20;
} else {
  bill = 220 + (units - 250) * 1.50;
}

// Add surcharge of 20%
bill = bill * 1.2;

// Display the result
console.log(`Total electricity bill: Rs. ${bill.toFixed(2)}`);
