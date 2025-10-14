const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
// app.set('view engine', 'ejs')
// app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/',  (req, res) =>{
//     res.send('Joy')
// })

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(port))
    }catch(error){
        console.log(error)
    }
}
start()
