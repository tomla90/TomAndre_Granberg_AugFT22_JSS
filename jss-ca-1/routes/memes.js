var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function (req, res, next) {
    let routeMemes = req.app.locals.memes;
    res.render('memes', { data: routeMemes });
});

module.exports = router;