const express = require('express')
const dataRoute = require('./routes/data.route')
const app = express()
require('./db/connect')
app.use(express.json())
app.use('/create',dataRoute)
const port = 3000
app.listen(port,console.log("server is listening on the port 3000..."))