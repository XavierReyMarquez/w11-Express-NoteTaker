const router = require("express").Router();
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  let results = noteList;
  res.json(results);
});

router.post("/notes", (req, res) => {});
