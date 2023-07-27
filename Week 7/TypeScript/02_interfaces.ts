interface PersonInterface {
  name: string;
  age: number;
  greet(): string;
}

// export function greet(person: Person): string {
//   return (
//     "Hello " + person.name + " glad that you are " + person.age + " years old"
//   );
// }

// console.log(greet({ name: "John", age: 30 }));

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return "Hi " + this.name;
  }
}

const person = new Person("anubhav", 20);
