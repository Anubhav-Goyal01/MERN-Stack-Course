
let counter1 = 1
setInterval(() => {
    console.log(counter1)
    counter1 += 1
}, 1000);


let counter2 = 0;
for (let i = 0; i < 1000; i++){
    counter2 += 1
}
console.log(counter2)

// Promises
function medicine1get(){
    console.log("Med 1 recieved");
    // Chaining
    setTimeout(() => {
        console.log("Med 2 recieved")
    }, 2000);
}

setTimeout(medicine1get, 1000);



// function getMedicine() {
//     return new Promise((resolve) => setTimeout(resolve, 1000))
//         .then(() => console.log("Med 1 recieved"))
// }

async function getMedicine() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return console.log("Med 1 recieved");
}

const getMedicineShorter = () => new Promise((resolve) => setTimeout(resolve, 1000))
                                    .then(() => console.log("Med 1 recieved"))

getMedicineShorter()