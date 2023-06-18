const express = require("express")
const app = express()
const port = 3000

function calcSum(count) {
    let sum = 0
    for (let i = 0; i < count; i++){
        sum += i
    }
    return sum
}

app.get('/', (req, res) => {
    let counter = req.query.counter;
    let sum = calcSum(100, counter)
    console.log(sum);
    res.send(`The sum is ${sum}`) 
})

app.listen(port)