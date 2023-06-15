fs = require("fs")
fs.readFile("readthisfile.txt", options = {encoding:'utf-8'}, (err, data) => {
    if (err) throw new Error(err)
    console.log("Done reading the file")
    console.log(data);
})

sum = 0
for (let i = 0; i < 100000000; i++){
    sum += i
}

console.log(sum)