const { Schema } = require('mongoose')

const Business = new Schema(
    {
        name: {type:String, required:true},
        username: {type:String, required:true},
        password: {type:String, required:true},
        isLoggedIn: {type:String, required:true}
    }, 
    {timestamps:true}
)

module.exports = Business
