import React from "react";
import String from "./String";
import StringHint from "./StringHint";
import { getStartingNotes } from "../utils/noteManager";

import { Grid } from "@material-ui/core";

const StringRow = () => {
  return (
    <Grid container direction="column">
      {getStartingNotes().map((v, i) => [
        <Grid container direction="row" key={i}>
          <String
            key={i + 100}
            initNoteIdx={v[1]}
            correctNoteIdx={v[0]}
            isBad={v[1] !== v[0]}
          />
          {v[1] !== v[0] ? <StringHint key={i + 200} noteIdx={v[0]} /> : null}
        </Grid>
      ])}
    </Grid>
  );
};

export default StringRow;
