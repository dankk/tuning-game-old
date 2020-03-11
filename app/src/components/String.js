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
      action.handleNoteChange(action.stringIdx, state.noteIdx - 1);
      return {
        noteIdx: state.noteIdx - 1,
        text: notes_list[state.noteIdx - 1],
        soundPath: indexToNoteFile(state.noteIdx - 1)
      };
    case "sharp":
      if (state.noteIdx >= notes_list.length - 1) {
        return state;
      }
      action.handleNoteChange(action.stringIdx, state.noteIdx + 1);
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
  stringMain: { justifyContent: "center", alignItems: "center" },
  stringNote: { maxWidth: 500 },
  stringNoteBad: { maxWidth: 500, backgroundColor: "red" },
  changeButton: { maxWidth: 75 }
});

const String = ({ initNoteIdx, isBad, ...props }) => {
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

  const handleNoteChange = (shift, stringIdx) => {
    dispatch({
      type: shift,
      stringIdx: stringIdx,
      handleNoteChange: props.handleNoteChange
    });
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
      <Grid item xs={3} className={classes.changeButton}>
        {isBad ? (
          <Button
            onClick={() => handleNoteChange("flat", props.stringIdx)}
            size={"small"}
          >
            ♭
          </Button>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item xs={3} className={classes.stringNote}>
        <Paper
          onClick={handleNoteClick}
          className={isBad ? classes.stringNoteBad : classes.stringNote}
        >
          {isBad ? "?" : currentNote.text}
        </Paper>
      </Grid>
      <Grid item xs={3} className={classes.changeButton}>
        {isBad ? (
          <Button
            onClick={() => handleNoteChange("sharp", props.stringIdx)}
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
