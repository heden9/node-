var express = require('express');
var router = express.Router();
/* GET home page. */
var welcome = require('../controllers/welcome');
router.get('/login', welcome.login);
router.get('/buy', welcome.buy);
router.post('/checkLogin',welcome.checkLogin);
router.get('/logOut',welcome.logOut);
router.get('/regist',welcome.regist);
router.post('/save',welcome.save);
router.post('/Commit',welcome.Commit);
module.exports = router;
