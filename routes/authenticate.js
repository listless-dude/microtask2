const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/authentication');

const router = express.Router();
const HASH = 'hosteldevta';

router.post('/createUser', async (req, res) => {
    try {
        let user = await Users.findOne({email: req.body.email});
        if (user)
            return res.status(400).send("User already exists");
        
        // To hash a password using bcrypt asynchronously
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        
        // If not already present create one
        user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });

        // data to be encrypted
        const data = { id: user.id };

        const authToken = jwt.sign(data, HASH);
        res.json({status: "User added to database", authToken: authToken, user});
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");  
    }
});

router.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({email: req.body.email});
        if (!user)
            return res.status(400).send("User doesn't exist");
        
        // compare password of req body and encrypted password in the database
        const passComp = await bcrypt.compare(req.body.password, user.password);
        
        if (!passComp)
            return res.status(400).send("Incorrect credentials");
        
        const data = { id: user.id }; 

        const authToken = jwt.sign(data, HASH);
        res.json({status: "Logged in", authToken: authToken, user});
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
});

router.get('/getUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Users.findById(userId);

        if (!user)
            return res.json({status: "User doesn't exist"});
        
        res.json({status: "User found", user});
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;