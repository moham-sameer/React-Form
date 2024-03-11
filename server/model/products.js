const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "must provide username"],
        unique:true,
        trime:true,
    },
    role:String,
    speciality:String,
    disease:String,
    address:{
        type:String,
        required:[true,"must provide the address"]
    },
})

module.exports = mongoose.model('files',productSchema)