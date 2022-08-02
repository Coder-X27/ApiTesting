const mongoose=require('mongoose')

const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log('DB Connected');
    })
}
module.exports=connectToMongo;