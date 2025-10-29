const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// const cors = require('cors');
// app.use(cors());
// app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = 3500

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(port))
    }catch(error){
        console.log(error)
    }
}
start()
