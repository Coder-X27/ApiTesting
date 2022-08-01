const express = require('express');
const router = express.Router()
const User = require('../models/User');

router.post('/createuser', async (req, res) => {
    try {
        // Create a new user
        user = await User.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        });
        res.status(200).send({
            success:true,
            user,
        })
        console.log(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getuser", async(req, res) => {
    try {
        user = await User.find({});
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// DELETE USER 
router.delete("/deleteuser/:id", async(req, res) => {
    try {
        // Find the note to be delete and delete it
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("Not Found")}
        await user.remove()
        res.json({ "Success": "User has been deleted",user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// UPDATE USER 
router.put("/updateuser/:id", async(req, res) => {
    try {
        // Find the note to be delete and delete it
        let user = await User.findById(req.params.id);
        if (!user) { return res.status(404).send("Not Found")}
        user= await User.findByIdAndUpdate(req.params.id,req.body)
        res.json({ "Success": "User has been deleted",user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router