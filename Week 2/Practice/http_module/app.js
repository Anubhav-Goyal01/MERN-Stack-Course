const http = require("http")
const routes = require("./routes")

server = http.createServer(routes)
server.listen(3000)