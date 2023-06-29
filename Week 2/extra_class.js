// ### Synchronous Callback:
// Write a function 'higherOrder' that takes a callback function as an argument. Inside 'higherOrder', call the callback function synchronously.

function callme(){
    console.log("Hello")
}

function higherOrder(callback){
    callback()
}

higherOrder(callme)

// ### Asynchronous Callback:
// Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).

function higherOrderAsync(callback){
    const month = new Date().getUTCDate()
    setTimeout(() => {
        callback()
    }, month * 1000);
}

higherOrderAsync(callme)


// ### Array Map with Callback:
// Implement a function 'mapArray' that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of the array and return a new array with the modified values.

function mapArray(array, callback){
    const arr = array.map(callback)
    return arr
}

function multiply(n){
    return n * 2
}

const arr = [1, 2, 3, 4]
console.log(mapArray(arr, multiply))