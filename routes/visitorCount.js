const express = require('express');
const Visitors = require('../models/visitors');

const router = express.Router();

router.post('/addCount', async (req, res) => {
    try {
        const vist = await Visitors.find();
        if (vist.visitors == 0)
        {
            const newVist = await Visitors.create({visitors: 1});
            return res.json({ newVist });
        }
        const updatedCount = await Visitors.findOneAndUpdate({visitors: vist[0].visitors} , 
                                                            {visitors: vist[0].visitors+1}, {new: true});
        return res.json({ updatedCount });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/getCount', async (req, res) => {
    try {
        const vist = await Visitors.findOne();
        res.json({ vist: vist.visitors });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/resetCount', async (req, res) => {
    try {
        const vist = await Visitors.findOne();
        const updatedVist = await Visitors.findOneAndUpdate({visitors: vist.visitors}, {visitors: 0}, {new: true});
        res.send(updatedVist);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Sever Error");
    }
});

module.exports = router;