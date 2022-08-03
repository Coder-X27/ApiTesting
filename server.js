const app=require('./app')

const connectToMongo =require('./config/database')

connectToMongo()


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})
