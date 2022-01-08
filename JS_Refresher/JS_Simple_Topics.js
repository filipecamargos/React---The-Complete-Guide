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
class Human {
    arms = 2;

    printArms = () => {
        console.log(this.arms);
    }
}
class Person extends Human {
    name = 'Person Name';
    printName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printName();
person.printArms();