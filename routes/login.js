const express = require('express');
const router = express.Router();

///// Route for login page
router.get('/logout', (req, res) => {
    return res.render('login');
});

///// Route for validate login
router.post("/albums", function(req, res) {
    if (req.body.username === "admin" && req.body.password === "admin") {
        res.render("albums");
    } else
        res.render("login", {
            message: 'Kullanıcı adı veya parola geçersiz!' });
});

///// 404 RESPONSE
router.get('/logout', function(req, res){
   return res.render('login');
});


module.exports = router;