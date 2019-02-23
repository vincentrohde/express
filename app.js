const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// set up serve
const app = express();
// use of bodyparser
const urlencodedParser = bodyParser.urlencoded({extended: false});

//use of the template engine
app.set('view engine', 'ejs');

// use of express's middleware
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    // use of ejs
    res.render('contact', {
        qS: req.query
    });
});

app.post('/', urlencodedParser, function (req, res) {
    res.render('contact-success', {
        data: req.body
    });
});

app.listen(3000);