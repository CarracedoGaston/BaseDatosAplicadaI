const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()
const port = 5000

const mongoDBURL = 'mongodb+srv://Gaston:<password>@clusterdb-1esq3.mongodb.net/escribania'

mongoose.connect(mongoDBURL, {useNewUrlParser: true})

app.use('/', router)

app.listen(port, () =>{
    console.log(`App listening on port ${port}!`)
})