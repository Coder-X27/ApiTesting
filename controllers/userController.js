const User=require('../models/User')

exports.register=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const user=await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success:true,
            user
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err
        })
    }
}
exports.getUsers=async(req,res)=>{
    try{
        const user=await User.find()
        res.status(201).json({
            success:true,
            user
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err
        })
    }
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email,password})
        if(!user){
            return res.status(500).json({
                success:false,
                message:"Email or password is incorrect"
            })
        }
        res.status(201).json({
            success:true,
            message:"logged in successfully",
            user
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err
        })
    }
}