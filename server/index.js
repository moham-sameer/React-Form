const express = require('express')
const dataRoute = require('./routes/data.route')
const authRoute = require('./routes/users.routes')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()
const cors= require('cors')
require('./db/connect')
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/auth',authRoute)
app.use('/create',dataRoute)
app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500
    const message = error.statusCode ||"Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})
const port = 3000
app.listen(port,console.log("server is listening on the port 3000..."))