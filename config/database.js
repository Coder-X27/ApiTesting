const mongoose=require('mongoose')

const connectToMongo=()=>{
    mongoose.connect("mongodb+srv://karanshx:karanshx@cluster0.oyjymk3.mongodb.net/sampleApi?retryWrites=true&w=majority",()=>{
        console.log('DB Connected');
    })
}
module.exports=connectToMongo;