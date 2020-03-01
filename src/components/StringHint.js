import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { indexToNoteFile } from "../utils/noteManager";

const StringHint = ({ noteIdx }) => {
  console.log("rerender :/");

  const initState = {
    soundPath: indexToNoteFile(noteIdx)
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

  return <Button onClick={handleClick}>Hint</Button>;
};

export default StringHint;
