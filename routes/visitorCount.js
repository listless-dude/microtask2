const express = require('express');
const Visitors = require('../models/visitors');

const router = express.Router();
const HASH = 'hosteldevta';

router.post('/addCount', async (req, res) => {
    try {
        const vist = await Visitors.create({visitors})
    }
    catch (error) {
        console.log(error);
        req.status(500).send("Internal Server Error");
    }
});
module.exports = router;