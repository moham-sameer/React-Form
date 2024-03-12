const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "must provide username"],
        trime:true,
    },
    password:{
        type:String,
        required:[true,"must provide the password"]
    },
   
})

module.exports = mongoose.model('auths',productSchema)