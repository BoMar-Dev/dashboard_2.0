import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors"



// multer fileupload



//Routes
import birthdays from "./router/birthdays.js"
import weeklyChallange from "./router/weeklyChallange.js"
import todo from "./router/todo.js"
import responsability from "../server/router/responsability.js"
import galleryFileUpload from "../server/router/galleryFileUpload.js"

const app = express();

dotenv.config();

const pw = process.env.SQLpw;
const dbname = process.env.DBname;



app.use(cors());
app.use(express.json()); // allows us to send a json file using the client

const PORT = process.env.PORT;
// if connection problem :  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mypassword'
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


  app.use("/api", birthdays);
  app.use("/api", weeklyChallange )
  app.use("/api", todo) 
  app.use("/api", responsability)
  // app.use("/api", galleryFileUpload, uploads.single("imgUrl"))
 
  
  
  
// G E T
app.get("/", (req, res) => {
  res.json("Hi from backend");
});














