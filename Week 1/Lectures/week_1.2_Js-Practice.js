// Hollow square pattern

function SingleFullRow(nRows){
    stringToPrint = ""
    for (let i = 0; i < nRows; i++){
        stringToPrint += "*"
    }
    console.log(stringToPrint)
}

function HollowSquarePatter(nRows){
    SingleFullRow(nRows)
    for(i = 1; i <= nRows - 2; i++){
        stringToPrint = ""
        for (let j = 0; j < nRows; j++){
            if (j == 0 || j == nRows - 1){
                stringToPrint += "*"
            } else{
                stringToPrint += " "
            }
        }
        console.log(stringToPrint)
    }
    SingleFullRow(nRows)
}

// HollowSquarePatter(7)


// Asynchronous Javascript
function count(first, last){
    let sum = 0;
    for (i = 0; i < last; i++){
        sum += i
    }
    return sum
}

setTimeout(() => {
    console.log("1 second have passed");
}, 1000)

let ans = count(1, 1000000000)
console.log(ans);


// Once the timeout is over, it will be put into a callback queue which we will get executed once the main thread is free. Therefore, we might not get a print statement after 1 second, it depends on when the main thread is free.