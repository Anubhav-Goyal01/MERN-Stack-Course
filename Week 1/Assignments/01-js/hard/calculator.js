/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
class Calculator {
  constructor() {
    this.result = 0
  }
  add(n) {
    this.result = this.result + n
  }
  subtract(n) {
    this.result = this.result - n
  }
  multiply(n) {
    this.result = this.result * n
  }
  divide(n) {
    if (n === 0){
      throw new Error("error")
    }
    this.result = this.result / n
  }
  clear(n) {
    this.result = 0
  }
  getResult(n) {
    return this.result
  }

  getPrecedence(operator) {
    if (operator === "*" || operator === "/") {
      return 2;
    } else if (operator === "+" || operator === "-") {
      return 1;
    }
    return 0;
  }

  containsinvalidChars(str){
    const pattern = /[a-zA-Z]/
    return pattern.test(str)
  }

  calculate(str) {
    str = str.replace(/\s/g, "")
    if (this.containsinvalidChars(str)){
      throw new Error("Invalid characters")
    }
    const arr = str.match(/\d+(\.\d+)?|\+|\-|\*|\/|\(|\)/g, "")
    const obj = {}
    for (let token of arr){
      if (token in obj){
        obj[token] += 1
      } else if ((token == ")") && !("(" in obj)){
        throw new Error("error")
      } else {
        obj[token] = 1
      }
    }
    if (obj["("] !== obj[")"]){
      throw new Error("Error")
    }

    let stack = []
    let operators = []
    for (let token of arr) {
      if (!isNaN(parseFloat(token))) {
        stack.push(parseFloat(token))
      } else if (token === "("){
        operators.push(token)
      } else if (token === ")"){
        while (
          operators.length > 0 && operators[operators.length - 1] !== "("
        ){
          const operator = operators.pop();
          const num2 = stack.pop();
          const num1 = stack.pop();

          if (operator === "+") {
            stack.push(num1 + num2);
          } else if (operator === "-") {
            stack.push(num1 - num2);
          } else if (operator === "*") {
            stack.push(num1 * num2);
          } else if (operator === "/") {
            if (num2 === 0){
              throw new Error("error")
            }
            stack.push(num1 / num2);
          }
        }
        operators.pop()
      } else  {
        while (
          operators.length > 0 &&
          this.getPrecedence(operators[operators.length - 1]) >= this.getPrecedence(token)
        ) {

          let operator = operators.pop()
          const num2 = stack.pop()
          const num1 = stack.pop()

          if (operator === "+") {
            stack.push(num1 + num2);
          } else if (operator === "-") {
            stack.push(num1 - num2);
          } else if (operator === "*") {
            stack.push(num1 * num2);
          } else if (operator === "/") {
            if (num2 === 0) {
              throw new Error("error")
            }
            stack.push(num1 / num2);
          }
        }
        operators.push(token)
      }
    }
    
    while (operators.length > 0) {
      const operator = operators.pop();
      const num2 = stack.pop();
      const num1 = stack.pop();

      if (operator === "+") {
        stack.push(num1 + num2);
      } else if (operator === "-") {
        stack.push(num1 - num2);
      } else if (operator === "*") {
        stack.push(num1 * num2);
      } else if (operator === "/") {
        if (num2 === 0){
          throw new Error("Divide by zero error")
        }
        stack.push(num1 / num2);
      }
    }
    this.result = stack.pop()
    return this.getResult()
  }
}


module.exports = Calculator;
