var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    let routeMemes = req.app.locals.memes;
    res.render('memes', { data: routeMemes, user: req.user });
});




 router.get('/search', (req, res, next) => {
     let searchTerm = req.query.searchTerm;
     try {
         if (!req.app.locals.memes || !searchTerm || searchTerm.trim() === "") {
             res.redirect('/memes');
             return;
         }
         let filteredMemes = req.app.locals.memes.filter(meme => meme.name.toLowerCase().includes(searchTerm.toLowerCase()));
         res.render('memes', { data: filteredMemes, user: req.user });
     } catch (error) {
         console.error(error);
         res.status(500).send({ error: error.message });
     }
 });




module.exports = router;