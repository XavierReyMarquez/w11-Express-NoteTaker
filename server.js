// creating express
const express = require("express");
const notesHTML = require("./public/notes.html");

const PORT = 3001;
const app = express();

app.get("/", (req, res) => res.send("Visit http://localhost:3001/"));

app.get("/", (req, res) => res.json(notesHTML));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
