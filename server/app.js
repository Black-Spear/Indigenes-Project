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
    let sql = 'CREATE TABLE IF NOT EXISTS client(id_c int AUTO_INCREMENT, nom_c VARCHAR(255),prenom_c VARCHAR(255), email_c VARCHAR(255), mot_de_passe_c VARCHAR(255), pays_c VARCHAR(255), PRIMARY KEY(id_c))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created...');
    });
});

app.get('/getall', (req, res) => {
    let sql = 'SELECT * FROM client';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getUser', (req, res) => {
    let form = req.body;
    let sql = `SELECT * FROM client where email_c like '${form.email}' and mot_de_pass_c like '${form.password}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getDelegation', (req, res) => {
    let sql = `SELECT id_g, libelle, id_d, libelle_d FROM gouvernorat JOIN delegation USING (id_g)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.post('/createUser', (req, res) => {
    console.log(req.body);
    let form = req.body;
    let sql = `INSERT INTO client(nom_c,prenom_c,email_c,mot_de_passe_c,pays_c) VALUES ('${form.fname}', '${form.lname}', '${form.email}', '${form.password}', '${form.country}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('User created...');
    });

});

app.post('/contact', (req, res) => {
    console.log(req.body);
    let form = req.body;
    let sql = `INSERT INTO contact(full_name,email,message) VALUES ('${form.fname}', '${form.email}', '${form.message}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Sent mail contact...');
    });

});