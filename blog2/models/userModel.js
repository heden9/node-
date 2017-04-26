var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '771854332',
    database: 'blog'
});

exports.getByNamePwd = function(name, pwd, callback){
    connection.connect();
    var sql = 'select * from t_user where username = ? and password = ?';
    connection.query(sql,[name, pwd],function(err, result){
        if (err) throw err;
        callback(result);
    });
    connection.end();
};

