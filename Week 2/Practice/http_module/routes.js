const requestHandler  = ((req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/'){
        res.write(
            `
            <html>
                <body>
                    Please enter a number
                    <form action='/sum' method="POST">
                        <input type='number' name='username'>
                        <button type='submit'>Submit</button>
                    </form>
                </body>
            </html>
            `
        )
        return res.end()
    }

    if (url === '/sum' && method === "POST"){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);
            const count = parseInt(parsedBody.split('=')[1])

            let sum = 0
            for (let i = 1; i <= count; i++){
                sum += i
            }

            res.write(
                `
                <html>
                    <body>
                    <h1> Sum is: </h1> ${sum}
                    </body>
                </html>
                `
            )
            return res.end()
        })
    }

})

module.exports = requestHandler
