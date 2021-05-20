const express = require('express');
const app = express();
var cors = require('cors');
const http = require('http').Server(app);
const server = require('./listen.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT=process.env.PORT

app.use(cors({credentials: true, origin: 'https://landshotelbookings.com'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/api', require('./routes/bookingRouter'))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', 'https://landshotelbookings.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });

server.listen(http, PORT);