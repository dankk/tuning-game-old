import React, { useReducer, useEffect } from "react";

import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { indexToNoteFile, notes_list } from "../utils/noteManager";

const pitchShiftReducer = (state, action) => {
  switch (action.type) {
    case "flat":
      if (state.noteIdx <= 0) {
        return state;
      }
      return {
        noteIdx: state.noteIdx - 1,
        text: notes_list[state.noteIdx - 1],
        soundPath: indexToNoteFile(state.noteIdx - 1)
      };
    case "sharp":
      if (state.noteIdx >= notes_list.length - 1) {
        return state;
      }
      return {
        noteIdx: state.noteIdx + 1,
        text: notes_list[state.noteIdx + 1],
        soundPath: indexToNoteFile(state.noteIdx + 1)
      };
    default:
      return state;
  }
};

const useStyles = makeStyles({
  stringMain: {
    alignItems: "center",
    maxWidth: "500px"
  },
  string: {
    textAlign: "center"
  },
  stringBad: {
    textAlign: "center",
    backgroundColor: "red"
  }
});

const String = ({ initNoteIdx, correctNoteIdx, isBad }) => {
  const classes = useStyles();
  const initState = {
    noteIdx: initNoteIdx,
    text: notes_list[initNoteIdx],
    soundPath: indexToNoteFile(initNoteIdx)
  };

  const [currentNote, dispatch] = useReducer(pitchShiftReducer, initState);

  const soundFile = new Audio(currentNote.soundPath);

  const handleNoteClick = () => {
    soundFile.currentTime = 0;
    soundFile.play();
    console.log(`clicked ${currentNote.text}!`);
  };

  const handleNoteChange = shift => {
    dispatch({ type: shift });
  };

  useEffect(() => {
    const p = soundFile.play();
    if (p !== undefined) {
      p.catch(error => {}).then(() => {});
    }
  }, [soundFile]);

  console.log("render");

  return (
    <Grid container direction="row" className={classes.stringMain}>
      <Grid item xs={2}>
        {isBad ? (
          <Button onClick={() => handleNoteChange("flat")}>♭</Button>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item xs={8}>
        <Paper
          onClick={handleNoteClick}
          className={isBad ? classes.stringBad : classes.string}
        >
          {isBad ? "?" : currentNote.text}
        </Paper>
      </Grid>
      <Grid item xs={2}>
        {isBad ? (
          <Button onClick={() => handleNoteChange("sharp")}>#</Button>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default String;
