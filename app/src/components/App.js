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
  // console.log(data);
  return data;
};

let selectedNotes;

function App() {
  const classes = useStyle();
  const [startingData, setStartingData] = useState(null);
  // const [selectedNotes, setSelectedNotes] = useState(null);

  const handleNoteChange = (stringIdx, noteIdx) => {
    // setSelectedNotes(s => ({ ...s, [stringIdx]: noteIdx }));
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
        selectedNotes = res.startingNotes.map(v => v[0]);
        // setSelectedNotes(res.startingNotes.map(v => v[0]));
      })
      .catch(error => console.log(error));
  }, []);

  if (!startingData) {
    return <>Loading...</>;
  }
  return (
    <Container className={classes.root}>
      <StringGroup {...startingData} handleNoteChange={handleNoteChange} />
      <Button type="submit" onClick={() => handleSubmit(selectedNotes)}>
        Submit
      </Button>
    </Container>
  );
}

export default App;
