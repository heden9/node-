var express = require('express');
var router = express.Router();
/* GET home page. */
var welcome = require('../controllers/welcome');
router.get('/login', welcome.login);
router.get('/', welcome.index);
router.post('/checkLogin',welcome.checkLogin);
module.exports = router;
