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

// ----- C  H  A  L  L  A  N   G  E --------------------------------------
// G E T - Weekly Challange 
router.get("/challange", (req,res)=>{
    const q = `SELECT * FROM ${dbname}.weekly_challange`
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


// P O S T - Weekly Challange 
router.post("/challange", (req,res)=>{
    const q = "INSERT INTO  weekly_challange ( `workout_name`, `count`) VALUES(?, ?)"
    const values = [
        req.body.workout_name,
        req.body.count
    ]
    db.query(q, values, (err,data)=>{
        if(err) return res.json(err)
        return res.json("New workout has been added to list")
    })
})

//  P U T - Weekly Challange 
router.put("/challange", (req,res)=>{
    const q = "UPDATE weekly_challange SET `workout_name` = ?, `count` = ? WHERE `id` = ?";
    const values = [
        req.body.workout_name,
        req.body.count,
        req.body.id
    ]
    db.query(q, values, (err,data)=>{
        if(err) return res.json(err)
        return res.json("Workouts has been updated")
    })

})

export default router;