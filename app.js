const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();

//Passport Config
require('./config/passport')(passport);

//Database Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Middleware for EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Middleware for BodyParser
app.use(express.urlencoded({extended: false}));

//Middleware for Express-session
app.use(session({secret: 'secret',
                 resave: true,
                 saveUninitialized: true
  })
);
//Middleware for Passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware for Connect-Flash
app.use(flash());

//Custom Middleware for Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//routes
app.use('/',require('./routes/index.js'))
app.use('/users',require('./routes/users.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));