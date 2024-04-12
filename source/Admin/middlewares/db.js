//Kết nối db
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'web_booking_ticket'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = connection;