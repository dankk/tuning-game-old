import React, { useState, useEffect, useCallback } from "react";

import StringGroup from "./StringGroup";
import { Container, makeStyles, Button } from "@material-ui/core";

import { handleSubmit } from "../utils/submitManager";
import { TestSubmit } from "./TestSubmit";
import { indexToNoteFile } from "../utils/noteHandler";

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
  const [round, setRound] = useState({ value: 0 });

  const handleNoteChange = (stringIdx, noteIdx) => {
    selectedNotes = [
      ...selectedNotes.slice(0, stringIdx),
      noteIdx,
      ...selectedNotes.slice(stringIdx + 1)
    ];
    //play note
    const newSound = indexToNoteFile(noteIdx, startingData.notesList);
    console.log(newSound);
    new Audio(newSound).play();
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
    const submitResult = handleSubmit(selectedNotes, correctNotes);
    const setRoundFunc = () => {
      console.log("in setroundfunc");
      console.log(submitResult);
      submitResult
        ? setRound(s => ({ value: s.value + 1 }))
        : setRound({ value: 0 });
    };
    setTimeout(() => {
      setRoundFunc();
      setStartingData(null);
    }, 2000);
    return submitResult;
  }, []);

  if (!startingData) {
    console.log("nulling");
    return null;
  }
  return (
    <Container className={classes.root}>
      Score: {round.value}
      <StringGroup {...startingData} handleNoteChange={handleNoteChange} />
      <TestSubmit submitHandler={() => doSubmit(selectedNotes, correctNotes)} />
    </Container>
  );
}

export default App;
