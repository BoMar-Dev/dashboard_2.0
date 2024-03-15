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

router.get("/upload", (req, res) => {
    const q = `SELECT * FROM ${process.env.DBname}.url_for_imgs`;
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  
  // P O S T  - Todo
  router.post("/upload", (req, res) => {
    const q = "INSERT INTO url_for_imgs (`imgUrl`) VALUES (?)";
    const values = req.body.imgUrl;
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json(`----${req.body.imgUrl}---- New IMG has been added to the DB`);
    });
  });

  export default router;