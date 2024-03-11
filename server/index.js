const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello brothers")
})
const port = 3000
app.listen(port,console.log("server is listening on the port 3000..."))