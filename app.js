// these first lines will load modules and the server port
const express = require('express'); //this line uses the require method to implament the express module later to be called and opened up.
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000;
//below we load up the routes
const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
// this is the required variable
require('dotenv').config()

//create the express app
const app = express();
// connect to the MongoDb with mongoose
require('./config/database');
require('./config/passport');
// set our view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//add session middleware
app.use(session({
    secret: "STACKS" ,
    resave: false,
    saveUninitialized: true
}))

//add session middleware
app.use(passport.initialize());
app.use(passport.session());

//below we set our routes
app.use('/', indexRouter)
// app.use('/', )

app.listen(port, () => {
    console.log(`Express is on this port:${port}`);
});