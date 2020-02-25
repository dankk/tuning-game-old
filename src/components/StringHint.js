import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { indexToNoteFile } from "../utils/noteManager";

const StringHint = ({ noteIdx }) => {
  console.log(noteIdx);
  const initState = {
    timeClicked: 0,
    sound: new Audio(indexToNoteFile(noteIdx))
  };
  const [state, setState] = useState(initState);

  const handleClick = () => {
    state.sound.currentTime = 0;
    const p = state.sound.play();
    if (p !== undefined) {
      p.catch(error => {}).then(() => {});
    }
    setState({ ...state, timeClicked: state.timeClicked + 1 });
  };

  return <Button onClick={handleClick}>Hint</Button>;
};

export default StringHint;
