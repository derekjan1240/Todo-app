const router = require('express').Router();

router.get('/test', (req, res) => {
    console.log(req.body);

    const data = {
        data: 'test',
    };

    res.json(data);
});

module.exports = router;
