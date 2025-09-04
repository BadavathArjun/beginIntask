const prompt = require("prompt-sync")();

// Fibonacci Sequence Function
function fibonacci(n) {
    let seq = [];
    let a = 1, b = 1;

    if (n >= 1) seq.push(a);
    if (n >= 2) seq.push(b);

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        seq.push(next);
        a = b;
        b = next;
    }
    return seq;
}

// Input from user
let terms = parseInt(prompt("Enter number of terms for Fibonacci sequence: "));
console.log(`Fibonacci sequence up to ${terms} terms:`);
console.log(fibonacci(terms).join(" "));
