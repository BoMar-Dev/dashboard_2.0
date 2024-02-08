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

//-----------------T   O   D   O ----------------------------------
// G E T  - Todo
router.get("/todo", (req, res) => {
    const q = `SELECT * FROM ${process.env.DBname}.todos`;
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
  
  // P O S T  - Todo
  router.post("/todo", (req, res) => {
    const q = "INSERT INTO todos (`item`) VALUES (?)";
    const values = req.body.item;
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json(`----${req.body.item}---- has been added to todo-list`);
    });
  });
  
  
  // D E L E T E - Todo
  
  router.delete("/todo", (req,res)=>{
      const q = "DELETE FROM todos WHERE item = ?"
      const values = [
          req.body.item,
          req.body.id
  
      ]
      db.query(q, values, (err,data)=>{
          if(err) return res.json(err)
          return res.json(` -- ${req.body.item} -- has been removed from todo-list`)
      })
  })
  
  export default router;