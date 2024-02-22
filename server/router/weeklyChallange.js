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

// ----- C  H  A  L  L  E  N   G  E --------------------------------------

// G E T - Fetch Weekly Challange 
router.get("/challenge", (req,res)=>{
    const q = `SELECT * FROM ${dbname}.weekly_challange`
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})




//  P U T - update Weekly Challange 
router.put("/challenge/:id", (req,res)=>{
    const q = "UPDATE weekly_challange SET `count` = ? WHERE `id` = ?";
    const values = [
        req.body.count,
        req.params.id, // Access workout ID from URL parameter
    ];

    db.query(q, values, (err,data)=>{
        if(err) return res.json(err)
        return res.json("Workouts has been UPDATED")
    })
});

// P O S T - Reset all values to 0 
router.post("/challenge/reset", (req,res)=>{
    db.query("UPDATE weekly_challange SET `count` = 0 WHERE `id` >= 0", (err,data)=>{
        if(err) return res.json(err)
        return res.json("Workouts has been RESET    ")
    })
});

export default router;


// NOT USING THIS, JUST FOR LEARNING
// // GET - SINGEL
// router.get("/challenge/:id", (req, res) => {
//     const id = req.params.id;
//     const q = `SELECT * FROM ${dbname}.weekly_challange WHERE id = ?`;
//     db.query(q, [id], (err, data) => {
//         if (err) return res.json(err);
//         if (data.length === 0) {
//             return res.status(404).json({ message: "Element not found" });
//         }
//         return res.json(data[0]); // Assuming you want to return only one element
//     });
// });





// KEEPING THIS PUT REQUEST TO LEARN WHAT WENT WRONG

/* router.put("/challenge/", (req,res)=>{
     const q = "UPDATE weekly_challange SET `count` = ? WHERE `id` = ?";
     const values = [
         req.body.count,
         req.body.id,
    ];

     db.query(q, values, (err,data)=>{
       if(err) return res.json(err)
       return res.json("Workouts has been updated")
      })
 }); 
 /*



/* The workout ID is obtained from the URL parameter (req.params.id). This means that the client must include the workout ID as part of the URL when making a PUT request. 
 This approach is commonly used in RESTful APIs, where the resource identifier is included in the URL path itself.

 In summary, the difference lies in how the workout ID is provided: in the request body or as part of the URL. 
/* The latter approach is more common in RESTful APIs and is often preferred for clarity and consistency */
