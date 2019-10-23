const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()
const port = process.env.PORT || 5000

const mongoDBURL = 
'mongodb+srv://Gaston:1234@clusterdb-1esq3.mongodb.net/escribania'

mongoose.connect(mongoDBURL, {useNewUrlParser: true})

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next();
}

app.use(allowCrossDomain)

// if( process.env.NODE_ENV === 'production') {
//     app.use(express.static('public'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, "index.html"))
//     })
// }

app.use(express.static('public'))
app.get('*')


app.use('/api', router)

app.listen(port, () =>{
    console.log(`App listening on port ${port}!`)
})