import React, { useState, useEffect, useCallback } from "react";

import StringGroup from "./StringGroup";
import { Container, makeStyles, Button } from "@material-ui/core";

import { handleSubmit } from "../utils/submitManager";
import { TestSubmit } from "./TestSubmit";

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
  const [round, setRound] = useState(0);

  const handleNoteChange = (stringIdx, noteIdx) => {
    selectedNotes = [
      ...selectedNotes.slice(0, stringIdx),
      noteIdx,
      ...selectedNotes.slice(stringIdx + 1)
    ];
  };

  useEffect(() => {
    async function fetchData() {
      await getStartingData()
        .then(res => {
          setStartingData(res);
          selectedNotes = res.startingNotes;
          correctNotes = res.correctNotes;
        })
        .catch(error => console.log(error));
    }
    fetchData();
  }, [round]);

  const doSubmit = useCallback((selectedNotes, correctNotes) => {
    //hacky ?
    setTimeout(() => {
      setRound(s => s + 1);
      setStartingData(null);
    }, 2000);
    return handleSubmit(selectedNotes, correctNotes);
  }, []);

  if (!startingData) {
    return null;
  }
  return (
    <Container className={classes.root}>
      <StringGroup {...startingData} handleNoteChange={handleNoteChange} />
      <TestSubmit submitHandler={() => doSubmit(selectedNotes, correctNotes)} />
    </Container>
  );
}

export default App;
