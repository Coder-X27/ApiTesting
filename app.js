const express=require("express")
const dotenv=require("dotenv")
const app=express();
dotenv.config({path:"./config/config.env"})

const userRoute=require('./routes/userRoute')

app.use(express.json())

app.use('/api/v1',userRoute);


module.exports=app