const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()
const port = 5000

app.use('/', router)

app.listen(port, () =>{
    console.log(`App listening on port ${port}!`)
})