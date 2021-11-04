const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.use(require('./routes/index'))


mongoose.connect('mongodb+srv://zelim:123321@cluster0.npjgq.mongodb.net/First_Project')
    .then(()=>{
        console.log("Mongo connect")
        app.listen(port, ()=>{
            console.log("server start")
        })
    })
    .catch((error) =>{
        console.log("error connect Mongo")
    })


