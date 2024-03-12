const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/FormDb'
mongoose.connect(url).then(()=>{
    console.log("Database Connected")
})