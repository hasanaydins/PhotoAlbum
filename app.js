var express = require('express');
var nunjucks = require('nunjucks');
var passport = require('passport');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.set("view engine", "njk"); // uzantı eklemek icin nodemon app.js -e js,html,njk,css

nunjucks.configure('views', {
    express: app
});

app.get("/", function(req, res) {
    res.render("login");
});

app.post("/albums", function(req, res) {
    if (req.body.username === "admin" && req.body.password === "admin") {
        res.render("albums");
    } else
        res.render("login", {
            message: 'Kullanıcı adı veya parola geçersiz!' });
});

app.get("/albums", function(req, res) {
    res.render("error");
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server %d portunda", this.address().port);
});
