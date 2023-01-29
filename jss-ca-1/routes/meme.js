var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
var ensureLogIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/:id', ensureLogIn({ redirectTo: '/login' }), (req, res, next) => {
   const memeId = req.params.id;
    const data = req.app.locals.memes
    const meme = data.find(meme => meme.id === memeId);
    res.render('meme',  { meme, user: req.user });
  });
  
  module.exports = router;