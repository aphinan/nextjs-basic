const mysql = require('mysql2');

export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'TEST'
  });