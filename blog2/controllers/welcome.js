var userModel = require('../models/userModel');

exports.index = function(req, res, next) {
    var name = req.query.name;
    var age = req.query.age;
    console.log(name + " " + age);
    res.render('index');
};


exports.login = function(req, res, next) {
    res.render('login', {
        title: 'Express22'
    });
};
exports.checkLogin = function(req, res, next){
    var name = req.body.username;
    var pwd = req.body.pwd;

    userModel.getByNamePwd(name, pwd, function(result){
        console.log(result);
        if(result.length > 0)
            res.render('index');
        else
            res.send('123');
    });
};