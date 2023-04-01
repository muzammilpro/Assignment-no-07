// Get the basic salary from the user
var basicSalary = parseInt(prompt("Enter the basic salary: "));

var grossSalary;

// Calculate gross salary based on basic salary
if (basicSalary <= 10000) {
  grossSalary = basicSalary + (basicSalary * 0.2) + (basicSalary * 0.8);
} else if (basicSalary <= 20000) {
  grossSalary = basicSalary + (basicSalary * 0.25) + (basicSalary * 0.9);
} else {
  grossSalary = basicSalary + (basicSalary * 0.3) + (basicSalary * 0.95);
}

// Display the gross salary to the user
console.log("Gross Salary: " + grossSalary);
