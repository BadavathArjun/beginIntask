const prompt = require("prompt-sync")();

// Factorial Function
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Input from user
let num = parseInt(prompt("Enter a number to find factorial: "));
console.log(`Factorial of ${num} is: ${factorial(num)}`);
