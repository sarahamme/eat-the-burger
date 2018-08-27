var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
    })
};

connection.connect(function(err){
    if (err) {
        console.log('Error: MySql connection -' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to mySql Database as id ' + connection.threadId + '\n\n')
});

module.exports = connection;