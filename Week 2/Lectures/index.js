const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// function middleware1(req, res, next){
//     console.log(`Executed inside the middleware: ${req.headers.counter}`)
//     next()
// }

// app.use(middleware1)
app.use(bodyParser.json())

function calcSum(count) {
    let sum = 0
    for (let i = 0; i < count; i++){
        sum += i
    }
    return sum
}

function calcMul(count) {
    let prod = 1
    for (let i = 1; i <= count; i++){
        prod *= i
    }
    return prod
}


function givePage(req, res){
    res.send(`
    <body>
        <b>Hi there</b>
    </body>
    `)
}

app.get('/', givePage)

app.get('/handlesum', (req, res) => {
    let counter = req.query.counter;
    let calculatedSum = calcSum(counter)
    let calculatedMul = calcMul(counter)
    let answer_obj = {
        sum: calculatedSum,
        multiply: calculatedMul
    }
    res.send(answer_obj)
})

app.listen(port)