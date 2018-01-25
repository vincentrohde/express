const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// set up serve
let app = express();
// use of bodyparser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//use of the template engine
app.set('view engine', 'ejs');

// use of express's middleware
app.use('/assets', express.static('assets'));

app.get('/', function(req,  res) {
  // use of ejs
  res.render('contact');
});

app.listen(3000);