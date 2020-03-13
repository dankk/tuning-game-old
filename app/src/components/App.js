import React, { useState, useEffect } from "react";

import StringGroup from "./StringGroup";
import { Container, makeStyles, Button } from "@material-ui/core";

import { handleSubmit } from "../utils/submitManager";

const useStyle = makeStyles({
  root: {
    textAlign: "center"
  }
});

const getStartingData = async () => {
  const res = await fetch("http://localhost:5000/start");
  const data = await res.json();
  return data;
};

let selectedNotes;
let correctNotes;

function App() {
  const classes = useStyle();
  const [startingData, setStartingData] = useState(null);

  const handleNoteChange = (stringIdx, noteIdx) => {
    selectedNotes = [
      ...selectedNotes.slice(0, stringIdx),
      noteIdx,
      ...selectedNotes.slice(stringIdx + 1)
    ];
  };

  useEffect(() => {
    getStartingData()
      .then(res => {
        setStartingData(res);
        selectedNotes = res.startingNotes;
        correctNotes = res.correctNotes;
      })
      .catch(error => console.log(error));
  }, []);

  if (!startingData) {
    return <>Loading...</>;
  }
  return (
    <Container className={classes.root}>
      <StringGroup {...startingData} handleNoteChange={handleNoteChange} />
      <Button
        type="submit"
        onClick={() => handleSubmit(selectedNotes, correctNotes)}
      >
        Submit
      </Button>
    </Container>
  );
}

export default App;
