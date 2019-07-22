var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var app = express();

///// Read pages as json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

///// Static js and css files
app.use(express.static('dist'));

///// Nunjucks configure
app.set("view engine", "njk"); // uzantı eklemek icin nodemon app.js -e js,html,njk,css
nunjucks.configure('views', {
    express: app
});

///// Routes
const indexRoutes = require('./routes');
const loginRoutes = require('./routes/login');

///// Use routes
app.use(indexRoutes);
app.use(loginRoutes);

///// Redirect logout
app.get('/logout', function(req, res) {
    res.redirect('login');
});

///// Firstly login handler
app.get('/albums', function(req, res) {
    res.render('error');
});

///// 404 RESPONSE
app.get('*', function(req, res){
    res.render('404');
  });

///// SERVER LISTEN 
app.listen(process.env.PORT || 2420, function() {
    console.log("server %d portunda", this.address().port);
});
