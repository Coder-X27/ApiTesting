const express=require("express")
const dotenv=require("dotenv")
const cors=require('cors')

const app=express();
app.use(cors())

dotenv.config({path:"./config/config.env"})

const userRoute=require('./routes/userRoute');
const { response } = require("express");

app.use(express.json())
app.use('/api/v1',userRoute);

app.get('/',(req,res)=>{
    res.send("server is working fine");
})

module.exports=app