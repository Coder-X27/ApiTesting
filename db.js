const mongoose = require('mongoose');


const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI, ()=>{
        console.log(`Connected to Mongo Successfully at ${process.env.MONGO_URI}`);
    })
}

module.exports = connectToMongo;