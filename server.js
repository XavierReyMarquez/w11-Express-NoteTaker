// creating express
const express = require("express");
const PORT = 3001;
const app = express();

const htmlRoutes = require("./routes/htmlRoutes/index.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", htmlRoutes);
app.use(express.static("public"));

app.listen(PORT, () => console.log(`running at  http://localhost:${PORT}`));
