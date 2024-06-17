"use strict";
let greet = (person) => {
    console.log(`${person.name} is ${person.age} years old...`);
};
const person = {
    name: 'Ivan',
    age: 33
};
greet(person);
