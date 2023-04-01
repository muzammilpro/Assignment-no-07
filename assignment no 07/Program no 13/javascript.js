//Write a js program to count total number of notes in given amount.

// ask user to enter amount
var amount = prompt("Enter the amount: ");

// initialize variables for counting notes
var notes5000 = 0, notes1000 = 0, notes500 = 0, notes100 = 0, notes50 = 0, notes20 = 0, notes10 = 0, notes5 = 0, notes1 = 0;

// calculate number of 5000 rupee notes
notes5000 = Math.floor(amount / 5000);
amount = amount % 5000;

// calculate number of 1000 rupee notes
notes1000 = Math.floor(amount / 1000);
amount = amount % 1000;

// calculate number of 500 rupee notes
notes500 = Math.floor(amount / 500);
amount = amount % 500;

// calculate number of 100 rupee notes
notes100 = Math.floor(amount / 100);
amount = amount % 100;

// calculate number of 50 rupee notes
notes50 = Math.floor(amount / 50);
amount = amount % 50;

// calculate number of 20 rupee notes
notes20 = Math.floor(amount / 20);
amount = amount % 20;

// calculate number of 10 rupee notes
notes10 = Math.floor(amount / 10);
amount = amount % 10;

// calculate number of 5 rupee notes
notes5 = Math.floor(amount / 5);
amount = amount % 5;

// calculate number of 1 rupee notes
notes1 = amount;

// display the total number of notes of each denomination
console.log("Total number of 5000 notes: " + notes5000);
console.log("Total number of 1000 notes: " + notes1000);
console.log("Total number of 500 notes: " + notes500);
console.log("Total number of 100 notes: " + notes100);
console.log("Total number of 50 notes: " + notes50);
console.log("Total number of 20 notes: " + notes20);
console.log("Total number of 10 notes: " + notes10);
console.log("Total number of 5 notes: " + notes5);
console.log("Total number of 1 notes: " + notes1);
