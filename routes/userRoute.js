const express=require('express');
const {register,getUsers,login}=require('../controllers/userController')
const router=express.Router();

router.route('/register').post(register)
router.route('/getUsers').get(getUsers)
router.route('/login').post(login)

module.exports=router