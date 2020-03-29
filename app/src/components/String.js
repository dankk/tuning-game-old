import React, { useReducer, useEffect } from "react";

import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { indexToNoteFile } from "../utils/noteHandler";

const pitchShiftReducer = (state, action) => {
  switch (action.type) {
    case "flat":
      if (state.noteIdx <= 0) {
        return state;
      }
      action.handleNoteChange(action.stringIdx, state.noteIdx - 1);
      return {
        noteIdx: state.noteIdx - 1,
        text: action.notesList[state.noteIdx - 1],
        soundPath: indexToNoteFile(state.noteIdx - 1, action.notesList)
      };
    case "sharp":
      if (state.noteIdx >= action.notesList.length - 1) {
        return state;
      }
      action.handleNoteChange(action.stringIdx, state.noteIdx + 1);
      return {
        noteIdx: state.noteIdx + 1,
        text: action.notesList[state.noteIdx + 1],
        soundPath: indexToNoteFile(state.noteIdx + 1, action.notesList)
      };
    default:
      return state;
  }
};

const useStyles = makeStyles({
  stringMain: { maxWidth: 350, alignItems: "center" },
  stringNote: { width: 200 },
  stringNoteBad: { width: 200, backgroundColor: "red" },
  changeButton: { width: 75 }
});

const String = ({ ...props }) => {
  const isBad = props.isBad;
  const initNoteIdx = props.initNoteIdx;
  const notesList = props.notesList;
  const handleNoteChange = props.handleNoteChange;

  const classes = useStyles();

  const initState = {
    noteIdx: initNoteIdx,
    text: notesList[initNoteIdx],
    soundPath: indexToNoteFile(initNoteIdx, notesList)
  };

  const [currentNote, dispatch] = useReducer(pitchShiftReducer, initState);

  const soundFile = new Audio(currentNote.soundPath);

  const handleNoteClick = () => {
    soundFile.currentTime = 0;
    soundFile.play();
    console.log(`clicked ${currentNote.text}!`);
  };

  const dispatchNoteChange = (shift, stringIdx) => {
    dispatch({
      type: shift,
      stringIdx: stringIdx,
      notesList: notesList,
      handleNoteChange: handleNoteChange
    });
  };

  console.log("render");

  return (
    <Grid container direction="row" className={classes.stringMain}>
      <Grid item className={classes.changeButton}>
        {isBad ? (
          <Button
            onClick={() => dispatchNoteChange("flat", props.stringIdx)}
            size={"small"}
          >
            ♭
          </Button>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item className={classes.stringNote}>
        <Paper
          onClick={handleNoteClick}
          className={isBad ? classes.stringNoteBad : classes.stringNote}
        >
          {isBad ? "?" : currentNote.text}
        </Paper>
      </Grid>
      <Grid item className={classes.changeButton}>
        {isBad ? (
          <Button
            onClick={() => dispatchNoteChange("sharp", props.stringIdx)}
            size={"small"}
          >
            #
          </Button>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default String;