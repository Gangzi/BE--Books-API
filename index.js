// Modules
require('dotenv').config()
const express = require('express')
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.render('Hello World')
})

app.use(express.json())

//Controllers & Routes
app.use('/places', require('./controllers/books'))

//Listen for Connections
app.listen(process.env.PORT)