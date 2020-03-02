const noteManager = require("./utils/noteManager");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/start", (req, res) => {
  res.send({
    startingNotes: noteManager.getStartingNotes(),
    notesList: noteManager.notesList
  });
});

app.listen(5000, () => {
  console.log("server is running");
});
