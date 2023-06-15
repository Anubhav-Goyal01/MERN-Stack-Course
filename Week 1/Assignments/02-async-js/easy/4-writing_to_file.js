const fs = require("fs")

fs.writeFile("wrotethisfile.txt", "Hello World", () => console.log("Done"))