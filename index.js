
const express = require('express')
const app = express()
var publicDir = require('path').join(__dirname, '/public')

app.use(express.static(publicDir))
// app.use(express.static(__dirname + '/public'));
// app.use('/images', express.static('images'));

app.get('/', (req, res) => {
    res.send("Hi, I'm Sheshhhhhhhh")
})

app.get('/about', (req, res) => {
    res.send('Hello from About Page')
})

app.get('/mainpage', function(req, res){
    res.sendFile(__dirname + '/public/Website.html')
})

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404 Not found.html')
})

app.listen(3000, () => {
    console.log("Starting Server at Port [3000]")
})