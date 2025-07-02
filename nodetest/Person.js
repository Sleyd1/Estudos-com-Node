class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
        console.log(`I'm ${this.age} years old`);
    }
}

module.exports = {
    Person,
}