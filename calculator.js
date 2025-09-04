const prompt = require("prompt-sync")();

// Calculator Function
function calculator(a, b, operation) {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }
    } else {
        return "Invalid operation";
    }
}

// Input from user
let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let operation = prompt("Enter operation (add, subtract, multiply, divide): ");

console.log(`Result: ${calculator(a, b, operation)}`);
