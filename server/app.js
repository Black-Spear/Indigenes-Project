const mysql = require('mysql');
const express = require('express');
const cors=require("cors");
const bodyparser = require('body-parser');

// connexion to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_indigenes'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

app.use(bodyparser.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS db_indigenes';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS Users(id int AUTO_INCREMENT, FName VARCHAR(255),LName VARCHAR(255), Email VARCHAR(255), Password VARCHAR(255), Country VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created...');
    });
});

app.get('/getall', (req, res) => {
    let sql = 'SELECT * FROM Users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getbyid', (req, res) => {
    let form = req.body;
    let sql = `SELECT * FROM Users where Email like '${form.email}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/createUser', (req, res) => {
    console.log(req.body);
    let form = req.body;
    let sql = `INSERT INTO Users(FName,LName, Email, Password, Country) VALUES ('${form.fname}', '${form.lname}', '${form.email}', '${form.password}', '${form.country}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post added...');
    });
});