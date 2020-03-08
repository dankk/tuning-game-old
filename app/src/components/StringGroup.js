import React from "react";
import String from "./String";
import StringHint from "./StringHint";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  stringRow: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  }
}));

const StringGroup = ({ startingNotes, ...props }) => {
  const classes = useStyles();

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
            initNoteIdx={v[1]}
            correctNoteIdx={v[0]}
            isBad={v[1] !== v[0]}
          />
          {v[1] !== v[0] ? (
            <StringHint key={i + 200} noteIdx={v[0]} maxHints={2} />
          ) : (
            <Grid item style={{ maxWidth: 100 }} />
          )}
        </Grid>
      ])}
    </>
  );
};

export default StringGroup;
