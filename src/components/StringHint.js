import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { indexToNoteFile } from "../utils/noteManager";

const StringHint = ({ noteIdx, maxHints }) => {
  console.log("rerender :/");

  let timesClicked = 0;

  const initState = {
    hideHint: false,
    soundPath: indexToNoteFile(noteIdx)
  };
  const [state, setState] = useState(initState);

  const soundFile = new Audio(state.soundPath);

  const handleClick = () => {
    soundFile.currentTime = 0;
    const p = soundFile.play();
    if (p !== undefined) {
      p.catch(error => {}).then(() => {});
    }
    timesClicked += 1;
    if (timesClicked >= maxHints) {
      setState(s => ({ ...s, hideHint: true }));
    }
    console.log(timesClicked < maxHints);
  };

  if (state.hideHint) {
    return null;
  }
  return <Button onClick={handleClick}>Hint</Button>;
};

export default StringHint;
