const mysql = require('mysql')
const express = require('express')

const connect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'your_current_password',
    database: 'Libreria'
    
});

module.exports = connect; 

