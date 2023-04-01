//Write a js program to count total number of notes in given amount.

var amount = prompt("Enter amount: ");
var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var count = [];

for (var i = 0; i < notes.length; i++) {
  var noteCount = Math.floor(amount / notes[i]);
  count.push(noteCount);
  amount -= noteCount * notes[i];
}

console.log("Total number of notes:");
for (var i = 0; i < notes.length; i++) {
  console.log(notes[i] + ": " + count[i]);
}
