const express = require('express');
const app = express();
const dotenv=require("dotenv")
dotenv.config({ path: './local.env' })
const port=process.env.PORT ||301
const cors=require('cors')
app.use(cors())
const api=require('./apidata.json')

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/api', function (req, res) {
   res.send(api);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})