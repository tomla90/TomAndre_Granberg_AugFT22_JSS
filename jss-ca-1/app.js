var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const request = require('request');
const axios = require('axios');
var passport = require('passport')
var session = require('express-session');
var JsonStore = require('express-session-json')(session);
var fs = require('fs');



function attachUser(req, res, next) {
  if(req.user) {
      res.locals.user = req.user;
  }
  next();
}

var app = express();


app.use(attachUser);

var indexRouter = require('./routes/index');
var memesRouter = require('./routes/memes');
var memeDetRouter = require('./routes/meme')
var loginRouter = require('./routes/login');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons'));
app.use(express.static(__dirname + '/node_modules/jquery/dist/'));




app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new JsonStore()
}));
app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/memes', memesRouter);
app.use('/meme', memeDetRouter);
app.use('/login', loginRouter);

const api = JSON.parse(fs.readFileSync('./api.json'));


let memes;

axios.get(api.memeAPI)
    .then((response) => {
        memes = response.data.data.memes;
        app.locals.memes = memes;
    })
    .catch((error) => {
        console.error(error);
    });



 
  



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

