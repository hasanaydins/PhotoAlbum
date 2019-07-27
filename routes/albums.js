const express = require('express');
const router = express.Router();

///// Route for albums page
router.get('/albums', (req, res) => {
    if (req.session.isLoggedIn) {
        return res.render('albums');
    } else {
        return res.redirect('login');
    }
});

module.exports = router;