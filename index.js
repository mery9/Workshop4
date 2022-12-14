
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hi, I'm Sheshhhhhhhh")
})

app.get('/about', (req, res) => {
    res.send('Hello from About Page')
})
app.listen(3000, () => {
    console.log("Starting Server at Port [3000]")
})