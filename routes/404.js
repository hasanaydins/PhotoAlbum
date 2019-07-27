const express = require('express');
const router = express.Router();

///// 404 response
router.get('/', (req, res) => {
    return res.render('404');
});

module.exports = router;