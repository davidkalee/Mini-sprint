const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hrpairs'
});


//WAIT IS THIS RIGHT? LOL OR IS MYSQL?
db.connect();

module.exports = db