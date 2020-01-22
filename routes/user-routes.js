const router = require('express').Router();
const User = require('../models/user-model');

router.get('/test/all', async (req, res) => {
    // list all users
    try {
        const users = await User.find({});
        // console.log('> List all users: ', users);
        res.status(201).send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/test/:id', async (req, res) => {
    // list specific user
    try {
        const specificUser = await User.findOne({ _id: req.params.id });
        if (specificUser) {
            // console.log('> List User: ', specificUser);
            res.status(201).send(specificUser);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/test', async (req, res) => {
    const newUser = await new User({
        ...req.body,
    });

    try {
        await newUser.save();
        // console.log('> Created new User: ', newUser);
        res.status(201).send(newUser);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

router.delete('/test/:userid', async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params.userid });
        if (deleteUser) {
            // console.log('> Delete User: ', deleteUser);
            res.status(201).send(deleteUser);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
