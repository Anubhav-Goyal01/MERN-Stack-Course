
// Sum from 1 to 100
let sum_numbers = (start, end) => {
    count = 0
    for (let i = start; i <= end; i++){
        count += i
    }
    console.log(count);
}

sum_numbers(1, 100)


// Fibonacci
let fib = (num) => {
    if( num == 0){
        return 0
    } else if (num == 1){
        return 1
    } else{
        return fib(num - 1) + fib(num - 2)
    }
}

console.log(fib(6))


// Pattern Creation
let create_pattern = (numRows) => {
    for (let i = 0; i < numRows; i++){
        let stringtoprint = ""
        for (var j = 0; j < i + 1; j++){
            stringtoprint += "*"
        }
        console.log(stringtoprint)
    }
}

create_pattern(5)


// Iterating through arrays
let users = ['anubhav', 'sameer', 'raman']
for (user of users){
    console.log(user)
}

users.forEach((user) => console.log(user))

// objects in arrays
users = [
    {'name': 'anubhav', 'age': 20},
    {'name': 'sameer', 'age': 21}
]

users.forEach(user => {
    console.log(`${user.name}'s age is ${user.age}`)
})


// Functions inside functions


function add(num1, num2){
    return num1 + num2
}


function multiply(num1, num2){
    return num1 * num2
}

function doMaths(firstEl, secondEl, arithmeticFxn){
    return arithmeticFxn(firstEl, secondEl)
}

let answer = doMaths(2, 3, add)
console.log(answer)