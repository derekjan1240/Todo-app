const router = require('express').Router();
const List = require('../models/list-model');

router.get('/test/:userid', async (req, res) => {
    try {
        const userLists = await List.find({ owner: req.params.userid });
        if (userLists) {
            console.log('> List User: ', userLists);
            res.status(201).send(userLists);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/test', async (req, res) => {
    const newList = await new List({
        ...req.body,
    });

    try {
        await newList.save();
        console.log('> Created new List: ', newList);
        res.status(201).send(newList);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;
