import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";


dotenv.config();

const pw = process.env.SQLpw;
const dbname = process.env.DBname;

const app = express();
app.use(express.json()); // allows us to send a json file using the client

const PORT = process.env.PORT;

// Connect to DB ( MY SQL )
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `${pw}`,
  database: `${dbname}`,
});


// RUN SERVER 
app.listen(PORT, () => {
    console.log(
      `Node to Server: Do you copy ? Server to node : Affirmative, I copy. Running on port : ${PORT} `
    );
  });
  

// if connection problem :  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mypassword'


// go to localhost + port to se the answer
// G E T
app.get("/", (req, res) => {
  res.json("Hi from backend");
});



//-----------------T   O   D   O ----------------------------------
// G E T  - Todo
app.get("/todo", (req, res) => {
  const q = `SELECT * FROM ${process.env.DBname}.todos`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// P O S T  - Todo
app.post("/todo", (req, res) => {
  const q = "INSERT INTO todos (`item`) VALUES (?)";
  const values = req.body.item;

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(`----${req.body.item}---- has been added to todo-list`);
  });
});


// D E L E T E - Todo

app.delete("/todo", (req,res)=>{
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


//--------------------------------------------------------------------//








// ----- C  H  A  L  L  A  N   G  E --------------------------------------
// G E T - Weekly Challange 
app.get("/challange", (req,res)=>{
    const q = `SELECT * FROM ${process.env.DBname}.weekly_challange`
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


// P O S T - Weekly Challange 
app.post("/challange", (req,res)=>{
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
app.put("/challange", (req,res)=>{
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



