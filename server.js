const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express()

connectDB();

app.use(morgan('dev'))
app.use(express.json()) //it will parse data from frontend

app.use('/api/v1/user', require("./routes/userRoutes"));

app.listen(8080, () => {  //listen will start the server
    console.log("")
})