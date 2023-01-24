var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');

router.get('/:id', (req, res, next) => {
   
    const memeId = req.params.id;
  
   
    const data = req.app.locals.memes
    const meme = data.find(meme => meme.id === memeId);
  
    
    res.render('meme', { meme });
  });
  
  module.exports = router;