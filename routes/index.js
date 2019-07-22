const express = require('express');
const router = express.Router();

///// Route for homepage login
router.get('/', (req, res) => {
    return res.render('login');
});

module.exports = router;