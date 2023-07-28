// type PersonType = {
//   name: string;
//   age: number;
// };

// function greet(person: PersonType) {
//   return "Hi Mr " + person.name + " you are " + person.age + " years old";
// }

// console.log(greet({ name: "John", age: 30 }));

interface Circle {
  radius?: number;
}

interface Square {
  side: number;
}

interface Rectangle {
  side: number;
  height: number;
}

type Shape = Rectangle | Circle | Square;

function renderShape(shape: Shape) {
  console.log("Rendered;");
}

function calculateArea(shape: Shape) {
  console.log("Calculated Area");
}

renderShape({
  radius: 10,
});
