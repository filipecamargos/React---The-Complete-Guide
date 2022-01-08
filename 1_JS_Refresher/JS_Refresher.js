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

//Classes & inheritance
class Human {
    constructor() {
        this.arms = 2;
    }   

    printArms() {
        console.log(this.arms);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'Person Name';
    }

    printName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printName();
person.printArms();


//Classes & inheritance simpler syntex ES6
class Human1 {
    arms = 2;

    printArms = () => {
        console.log(this.arms);
    }
}
class Person1 extends Human1 {
    name = 'Person Name';
    printName = () => {
        console.log(this.name)
    }
}

const person1 = new Person1();
person.printName();
person.arms = 3;
person.printArms();

//Spread Operator
const arr = [1, 2 , 3];
console.log(...arr)

//Destructuring
const arr2 = ['a', 'b'];
const [a1, b2] = arr2;
console.log(a1 + b2)

//reference and primitive types
let value = 1;
const object = {
    a: 1,
    b: 2
};

let copyValue = value //copy value
const objetcRef = object //reference

objetcRef.a = 3;
copyValue = 3;
console.log(object.a);
console.log(value);

//array methods ex: map
const numbers = [1, 2, 3, 4];

const result =  numbers.map((num) => {
    return num * 2;
})

//find the first number
found = result.find(num => num >= 4);
//find the index of the first number
const foundIndex = result.findIndex(num => num >= 4);
//filter the numbers and return an array
const filter = result.filter(num => num >= 6);
//execute returning a call back and adding
const total =  result.reduce((a, b) => a + b);
//concat two or more arrays
const concatArr = numbers.concat(result);
//return a shallow copy of the array from start to end - return a copy
const sliceArr = concatArr.slice(0, 4);
//change the array by removing or replacing
sliceArr.splice(1, 0, 'new');

console.log(result);
console.log(found);
console.log(foundIndex);
console.log(filter);
console.log(total);
console.log(concatArr);
console.log(sliceArr)