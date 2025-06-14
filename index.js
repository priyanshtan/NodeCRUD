const express = require('express')
const app = express()
const connect = require('./connection')
const route = require('./routes/route')
connect()
app.use(express.json());    

app.use(route)


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})