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

console.log(numbers);
console.log(result);