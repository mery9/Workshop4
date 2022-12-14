
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hi, I'm Sheshhhhhhhh")
})

app.get('/about', (req, res) => {
    res.send('Hello from About Page')
})

app.get('/mainpage', (req, res) => {
    res.sendFile(__dirname + '/html/Website.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/html/404 Not found.html')
})

app.listen(3000, () => {
    console.log("Starting Server at Port [3000]")
})