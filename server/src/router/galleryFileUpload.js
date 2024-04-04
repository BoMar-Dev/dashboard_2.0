import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();
const router = express.Router();


const __dirname = path.dirname(fileURLToPath(import.meta.url));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderPath = path.join(__dirname, "../../../client/public/img");
    cb(null, folderPath); // Folder where files will be stored
  },
  filename: function (req, file, cb) {
    // original name
    // cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
   
    // same name as the uploaded file 
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Configure MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SQLpw,
  database: process.env.DBname,
});


router.post("/galleri", upload.single("image"), (req, res) => {
  const imgUrl = req.file.filename; // Assuming you're serving static files from /public
  const q = "INSERT INTO img_name (img) VALUES (?)";
  db.query(q, [imgUrl], (err, data) => {
    if (err) {
      console.error("Error uploading file to database:", err);
      return res.status(500).json({ error: "Failed to upload file" });
    }
    return res.json({ success: true });
  });
});

router.get("/galleri/img", (req, res) => {
  const q = "SELECT img FROM img_name"; // Query to retrieve image file names from the database
  db.query(q, (err, results) => {
    if (err) {
      console.error("Error fetching image file names from database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const imageFileNames = results.map((result) => result.img);
    res.json(imageFileNames);
  });
});

export default router;
