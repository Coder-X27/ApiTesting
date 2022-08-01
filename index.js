const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const dotenv=require('dotenv');
dotenv.config({path:"./local.env"})
connectToMongo();
const app = express()
const port = process.env.PORT|| 5000

app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/user'))

const json={
  "karan":true,
  "age":23
}


app.get('/api/auth',(req,res)=>{
  res.send(json)  
})
app.get('/api/auth/getuser',(req,res)=>{
})



app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})