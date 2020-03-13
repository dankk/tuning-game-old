const noteManager = require("./utils/noteManager");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/start", (req, res) => {
  res.send(noteManager.getStartingData());
});

app.listen(5000, () => {
  console.log("server is running");
});
