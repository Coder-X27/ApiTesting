const express=require("express")
const dotenv=require("dotenv")
const cors=require('cors')
const path=require("path")
const app=express();
app.use(cors())

dotenv.config({path:"./config/config.env"})

const userRoute=require('./routes/userRoute');
const { response } = require("express");

app.use(express.json())
app.use('/api/v1',userRoute);

app.use(express.static(path.resolve("./frontend/build")))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve("./frontend/build/index.html"))
})

module.exports=app