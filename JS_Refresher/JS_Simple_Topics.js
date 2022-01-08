//Difference between normal function and Arrow function

//Normal Function
function sum(a, b) {
    return a + b;
}

//Arrow Function
const sum1 = (a, b) => {
    return a + b;
}

//or 
const sum2 = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sum1(1, 2));
console.log(sum2(1, 2));
