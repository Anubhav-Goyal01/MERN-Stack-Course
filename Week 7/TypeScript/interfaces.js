"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return ("Hello " + person.name + " glad that you are " + person.age + " years old");
}
exports.greet = greet;
console.log(greet({ name: "John", age: 30 }));
