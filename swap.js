//using 2 variables
// var a=100;
// var b=200;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);
//using 3 variables
// Function to swap three numbers without using a fourth variable
function swapThreeNumbers(a, b, c) {
    // Swapping without using a fourth variable
    a = a + b + c;
    b = a - b - c;
    c = a - b - c;
    a = a - b - c;

    console.log("After swapping:");
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
}

// Example usage
const num1 = 5;
const num2 = 10;
const num3 = 15;

console.log("Before swapping:");
console.log("num1 =", num1);
console.log("num2 =", num2);
console.log("num3 =", num3);

swapThreeNumbers(num1, num2, num3);
