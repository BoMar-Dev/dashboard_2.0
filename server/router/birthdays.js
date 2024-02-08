import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const pw = process.env.SQLpw;
const dbname = process.env.DBname;

// Connect to DB ( MySQL )
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `${pw}`,
  database: `${dbname}`,
});

// GET - Birthdays
router.get("/birthdays", (req, res) => {
  const q = `SELECT * FROM ${dbname}.birthdays`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

export default router;