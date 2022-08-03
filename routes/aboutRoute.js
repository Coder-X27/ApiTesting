const express=require('express');
const {}=require('../controllers/aboutController')
const router=express.Router();

router.route('/register').post(register)
router.route('/updateAbout').get(getUsers)
router.route('/getAbout').post(login)

module.exports=router