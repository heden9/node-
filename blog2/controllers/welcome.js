var userModel = require('../models/userModel');



exports.login = function(req, res, next) {
    res.render('login2', {
        user: ''
    });
};
exports.regist = function(req, res, next) {
    res.render('registration', {
        user: ''
    });
};
exports.save = function(req, res){
    var data = {
            username : req.body.username,
            pwd : req.body.pwd,
            name : req.body.name,
            sex : req.body.sex
        };
    userModel.sendByNamePwd(data,function(result){
        if(result.affectedRows > 0){
            res.redirect('/login');
        }else
            res.send('<script> alert("sorry"); </script>');

    });

};
exports.checkLogin = function(req, res, next){
    var name = req.body.username;
    var pwd = req.body.pwd;

    userModel.getByNamePwd(name, pwd, function(result){
        if(result.length > 0){
            console.log(result);
            req.session.user = result[0];
            res.redirect('/buy');
        } else
            res.send('sorry');
    });
};
exports.logOut = function(req, res){
    req.session.user = '';
    res.redirect('/login');
};
exports.buy = function(req, res){
    userModel.getImgInfo(function(result){
        if(result.length > 0){
            res.render('buy', {
                user: req.session.user,
                data: JSON.stringify(result)
            });
        }
    });
};
exports.Commit = function(req,res){
    if(!req.session.user){
        return;
    }
    var data = JSON.parse(req.body['product_info']);
    var newdata = [];
    for(var i = 0,len = data.length; i < len;i++){
        if(data[i].product_num != 0){
            newdata = newdata.concat({
                userID: req.session.user.id,
                productID: data[i].id,
                num: data[i].product_num
            });
        }
    }
    userModel.saveInfo(newdata, function(result){
        if(result.affectedRows > 0){
            res.send("true");
        }else{
            res.send("false");
        }
    });

};