const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {
    try{
        // const url = "mongodb+srv://krati:krati912@cluster0.k9zsx3y.mongodb.net/?retryWrites=true&w=majority".
        const url = "mongodb://127.0.0.1:27017/test";
        await mongoose.connect(url)
        console.log("Mongo connected")
    }
    catch (error){
        console.log(`Error in mongo connection ${error}`)
    } 
}

module.exports = connectDB;