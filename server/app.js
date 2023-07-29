const { Pool } = require("pg");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// Connection pool to PostgreSQL
const pool = new Pool({
  user: "postgres",
  password: "kDlILhyCvz3Ism3IL4Ue",
  host: "containers-us-west-193.railway.app",
  port: 6164,
  database: "railway",
});

const app = express();

app.use(bodyparser.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/getall", async (req, res) => {
  let sql = "SELECT * FROM client";
  try {
    const result = await pool.query(sql);
    console.log(result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

app.get("/getUser", async (req, res) => {
  let form = req.body;
  let sql = `SELECT * FROM client WHERE email_c LIKE $1 AND mot_de_pass_c LIKE $2`;
  const values = [`%${form.email}%`, `%${form.password}%`];
  try {
    const result = await pool.query(sql, values);
    console.log(result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user");
  }
});

app.get("/getDelegation", async (req, res) => {
  let sql = `SELECT DISTINCT id_g, libelle, id_d, libelle_d FROM gouvernorat JOIN delegation USING (id_g)`;
  try {
    const result = await pool.query(sql);
    console.log(result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching delegation data");
  }
});

app.get("/getproject", async (req, res) => {
  let sql = `SELECT projet.id_P, client.nom_c, projet.titre, projet.subtitle, projet.categorie, projet.id_g, gouvernorat.libelle, projet.img_P, projet.description, projet.id_d, delegation.libelle_d FROM projet, client, delegation, gouvernorat WHERE projet.id_c = client.id_c AND projet.id_d = delegation.id_d AND projet.id_g = gouvernorat.id_g`;
  try {
    const result = await pool.query(sql);
    console.log(result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching project data");
  }
});

app.post("/createUser", async (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO client(nom_c, prenom_c, email_c, mot_de_passe_c, pays_c) VALUES ($1, $2, $3, $4, $5)`;
  const values = [
    form.fname,
    form.lname,
    form.email,
    form.password,
    form.country,
  ];
  try {
    await pool.query(sql, values);
    res.send("User created...");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.post("/createProject", async (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO projet(titre, subtitle, categorie, gouvernorat, delegation, img_P, description) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const values = [
    form.titre,
    form.subtitle,
    form.category,
    form.gouv,
    form.deleg,
    form.img,
    form.description,
  ];
  try {
    await pool.query(sql, values);
    res.send("Project created...");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating project");
  }
});
