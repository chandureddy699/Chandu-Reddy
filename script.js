// 1. Store employee name using var.
var employeeName = "Your name";

// 2. Store employee age using let.
let employeeAge = 22;

// 3. Store company name using const.
const companyName = "Stackly";

// 4. Print all details using console.log().
console.log("Employee Name : " + employeeName);
console.log("Employee Age : " + employeeAge);
console.log("Company Name : " + companyName);

// ---------------------------------------------

// 5. Show a popup message: "Welcome to Employee Portal" using alert()
alert("Welcome to Employee Portal");

// ---------------------------------------------

// 6. Ask the employee: "Have you completed today's task?" using confirm()
// Store the result in a variable and print it using console.log().
let isTaskCompleted = confirm("Have you completed today's task?");
console.log(isTaskCompleted);

// ---------------------------------------------

// 7. Ask the employee name using prompt().
// Print the entered name in console.
let enteredName = prompt("Enter your name");
console.log(enteredName);

// ---------------------------------------------

// 8. Display the entered employee name on the webpage using document.writeln()
document.writeln("Welcome " + enteredName);

// ---------------------------------------------

// 9. Print a success message using console.warn().
console.warn("Task submitted successfully");

// ---------------------------------------------

// 10. Print an error message using console.error().
console.error("Task submission failed");

// ---------------------------------------------

// Bonus Task: Update employee age after promotion and print the updated value.
// Use: let variable re-initialization.
employeeAge = 23; // Re-assigning a new value to the 'let' variable
console.log("Updated Employee Age : " + employeeAge);