const router = require('express').Router();
const List = require('../models/list-model');

router.get('/test/:userid', async (req, res) => {
    try {
        const userLists = await List.find({ owner: req.params.userid });
        if (userLists) {
            console.log('> List User Lists: ', userLists);
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

router.post('/test/status/:listid', async (req, res) => {
    try {
        const list = await List.find({ _id: req.params.listid });
        if (list) {
            list.finished = !list.finished;
            list.save(() => {
                console.log('> Status Change List: ', list);
            });
            res.status(201).send(list);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete('/test/:listid', async (req, res) => {
    try {
        const deleteLists = await List.deleteOne({ _id: req.params.listid });
        if (deleteLists) {
            console.log('> Delete List: ', deleteLists);
            res.status(201).send(deleteLists);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
