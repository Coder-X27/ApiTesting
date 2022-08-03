const mongoose=require('mongoose')

const aboutScheme=new mongoose.Schema({
    description:{
        type:String,
    },
    resume:{
        type:String,
        url:{
            public_id:String,
            message:String,
        },
    },
    image:{
        type:String,
        url:{
            public_id:String,
            message:String,
        },
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('About',aboutScheme);