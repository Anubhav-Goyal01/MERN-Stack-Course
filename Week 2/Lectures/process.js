let sendObj = {
    method: "GET"
}

fetch("http://localhost:3000/handlesum?counter=10", sendObj).then((result) => {
    result.json().then((body) => {
        console.log(body);
    })
})