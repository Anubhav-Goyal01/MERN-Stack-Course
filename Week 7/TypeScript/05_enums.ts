enum Arithmetic {
  Add,
  Sub,
  Div,
  Mul,
}

function calculate(a: number, b: number, operation: Arithmetic): number {
  switch (operation) {
    case Arithmetic.Add:
      return a + b;
    case Arithmetic.Sub:
      return a - b;
    case Arithmetic.Div:
      return a / b;
    case Arithmetic.Mul:
      return a * b;
    default:
      throw new Error("Invalid Operation");
  }
}

let num = calculate(10, 20, Arithmetic.Add);
console.log(x);
