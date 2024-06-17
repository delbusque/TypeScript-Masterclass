"use strict";
const ford = {
    id: 1,
    year: 1988,
    manufacturer: 'Ford',
    model: 'Focus',
    report() {
        return `${this.id} ${this.model}`;
    }
};
let greet = (person) => {
    console.log(`${person.name} is ${person.age} years old..`);
};
const person = {
    name: 'Ivan',
    age: 33,
    email: 'hi@hi.com',
    greet() {
        return `${this.name} is ${person.age} years old... @ ${this.email}`;
    }
};
console.log(person.greet());
greet(person);
console.log(ford.report());
