// const { DATABASE_URL } = require("../config");
const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/leafMongoDatabase')
.then(()=>console.log('MongoDB is running'))
.catch((e)=>console.error('Connection error to MongoDB', e.message))

const db = mongoose.connection

module.exports = db