// Function which takes arr as an argument and returns a new array with each value doubled.

function doubleValues(arr) {
  return arr.map((val) => val * 2);
}

console.log(doubleValues([1, 2, 3])); // [2,4,6]

let array = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 30,
  },
  {
    name: "Jim",
    age: 28,
  },
];

// map does not modify the original array
let newArray = array.map((value) => {
  if (value.age > 25) {
    return {
      name: value.name,
      age: value.age,
      isAllowed: false,
    };
  } else {
    return {
      name: value.name,
      age: value.age,
      isAllowed: true,
    };
  }
});

console.log(newArray);
