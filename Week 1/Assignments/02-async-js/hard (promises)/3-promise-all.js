/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("One second passed");
            resolve()
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Two seconds passed");
            resolve()
        }, 2000)
    })

}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Three seconds passed");
            resolve()
        }, 3000)
    })
    
}
async function calculateTime() {
    let start = new Date()
    const promisesResolved = await Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ])

    let end = new Date()
    console.log(end - start)
    console.log("all promises resolved")
}
calculateTime()