import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();
const router = express.Router();


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the destination folder for uploaded files
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
  // Assuming you're storing file paths in the database
  const imgUrl = req.file.filename; // Assuming you're serving static files from /public
  const q = "INSERT INTO url_for_imgs (imgUrl) VALUES (?)";
  db.query(q, [imgUrl], (err, data) => {
    if (err) {
      console.error("Error uploading file to database:", err);
      return res.status(500).json({ error: "Failed to upload file" });
    }
    return res.json({ success: true });
  });
});

export default router;
