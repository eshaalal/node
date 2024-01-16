const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`The factorial of ${number} is: ${factorial}`);
