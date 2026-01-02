const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const db = require("./db");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// File Upload Setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Upload Route (Everyone can upload)
app.post("/upload", upload.single("paper"), (req, res) => {
  const { subject, year, semester, uploader } = req.body;
  const fileName = req.file.filename;

  const sql =
    "INSERT INTO papers (subject, year, semester, uploader, file_name) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [subject, year, semester, uploader, fileName], (err) => {
    if (err) throw err;
    res.redirect("/"); // Redirect to home page
  });
});

// Fetch papers for viewing
app.get("/papers", (req, res) => {
  db.query("SELECT * FROM papers ORDER BY id DESC", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
