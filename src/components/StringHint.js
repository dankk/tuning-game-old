import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { indexToNoteFile } from "../utils/noteManager";

const StringHint = ({ noteIdx }) => {
  console.log("rerender :/");

  const initState = {
    soundPath: indexToNoteFile(noteIdx)
    // sound: new Audio(indexToNoteFile(noteIdx))
  };
  const [state] = useState(initState);

  const soundFile = new Audio(state.soundPath);

  const handleClick = () => {
    soundFile.currentTime = 0;
    const p = soundFile.play();
    if (p !== undefined) {
      p.catch(error => {}).then(() => {});
    }
  };

  return (
    <Grid item>
      <Button onClick={handleClick}>Hint</Button>
    </Grid>
  );
};

export default StringHint;
