var db = require('./db');

exports.getByNamePwd = function(name, pwd, callback){
    var sql = 'select * from t_user where username = ? and password = ?';
    db.query(sql, [name, pwd], callback);

};
exports.sendByNamePwd = function(data,callback){
    var sql = 'insert into t_user(username,password,name) values(?,?,?)';
    db.query(sql, [data.username, data.pwd, data.name], callback);

};
exports.getImgInfo = function(callback){
    var sql = 'select * from img_info';
    db.query(sql,[], callback);
};
exports.saveInfo = function(data, callback){
    var sql = 'insert into user_product(userID,productID,num) values(?,?,?)';
    var param = [data[0].userID, data[0].productID, data[0].num];
    for(var i = 1,len = data.length; i < len;i++){
        sql += ',(?,?,?)';
        param = param.concat([data[i].userID, data[i].productID, data[i].num]);
    }
    db.query(sql,param, callback);
}