let x: number = 10;

function calculateSum(first: number, second: number): number {
  return first + second;
}

function calculator(
  first: number,
  second: number,
  type: "add" | "subtract" | "division" | "multiply"
): number {
  if (type === "add") {
    return first + second;
  } else if (type === "subtract") {
    return first - second;
  } else if (type === "division") {
    return first / second;
  } else if (type === "multiply") {
    return first * second;
  }
  return -1;
}
