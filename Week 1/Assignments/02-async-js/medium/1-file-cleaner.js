const fs = require("fs")

fs.readFile("cleanthisfile.txt", {encoding: "utf-8"}, (err, data) => {
    if (err) throw new Error(err)
    console.log(data)
    data = data.trim()
    arr = Array.from(data)
    for (let i = 0; i < arr.length; i++){
        char = arr[i]
        next_char = arr[i + 1]
        if (char == " " && next_char == " "){
            arr[i] = arr[i].replace(" ", "")
        }
    }
    data = arr.join("")
    console.log(data)
    fs.writeFile("cleanthisfile.txt", data, () => console.log("Done writing the file"))
})