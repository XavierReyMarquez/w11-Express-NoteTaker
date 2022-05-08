const express = require("express");
const fs = require("fs");
const { readFromFile, writeToFile, readAndAppend } = require("../lib/notes.js");
const { route } = require("express/lib/application");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.use(express.json());

// getting data already in db file
router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// adding data to db with id
router.post("/", (req, res) => {
  const bodyArr = [req.body.title, req.body.text, req.body.id];

  const { title, text, noteId } = bodyArr;

  if (req.body) {
    const NewNote = {
      title: bodyArr[0],
      text: bodyArr[1],
      id: uuidv4(),
    };
    readAndAppend(NewNote, "./db/db.json");
    res.json("Note added!");
  }
});

// displaying current note
router.get("/:id", (req, res) => {
  const noteId = res.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((array) => {
      const write = array.filter((note) => note.noteid === noteid);
      return write.length > 0 ? res.json(write[0]) : res.json("no ID");
    });
});

//delete

router.delete("/:id", (req, res) => {
  const noteId = res.params.id;

  readFromFile("./db/db.json")
    .then((inside) => JSON.parse(inside))
    .then((saved) => {
      const newString = saved.filter((note) => note.id !== noteid);
      writeToFile("./db/db.json", newString);
      res.status(200).json("deleting last note");
    });
});
module.exports = router;
