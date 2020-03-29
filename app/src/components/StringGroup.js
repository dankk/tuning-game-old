import React from "react";
import String from "./String";
import StringHint from "./StringHint";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  stringRow: {
    padding: theme.spacing(0.5, 0),
    justifyContent: "center"
  }
}));

const StringGroup = ({ ...props }) => {
  const classes = useStyles();

  const startingNotes = props.startingNotes;
  const correctNotes = props.correctNotes;
  const handleNoteChange = props.handleNoteChange;
  const notesList = props.notesList;
  return (
    <>
      {startingNotes.map((v, i) => [
        <Grid
          container
          direction="row"
          wrap={"nowrap"}
          className={classes.stringRow}
          key={i}
        >
          <String
            key={i + 100}
            stringIdx={i}
            initNoteIdx={v}
            correctNoteIdx={correctNotes[i]}
            isBad={v !== correctNotes[i]}
            handleNoteChange={handleNoteChange}
            notesList={notesList}
          />
          {v !== correctNotes[i] ? (
            <StringHint
              key={i + 200}
              noteIdx={correctNotes[i]}
              maxHints={2}
              notesList={notesList}
            />
          ) : (
            <Grid item style={{ maxWidth: 100 }} />
          )}
        </Grid>
      ])}
    </>
  );
};

export default StringGroup;
