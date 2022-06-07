const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serverStatic (path.join (__dirname, '/public')))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})
const port = process.env.PORT || 5000

app.listen(port)
console.log('Serving' + port)