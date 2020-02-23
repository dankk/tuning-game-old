import React from "react";
import String from "./String";
import { getStartingNotes } from "../utils/noteManager";

import { Container } from "@material-ui/core";

const StringGroup = () => {
  return (
    <Container>
      {getStartingNotes().map((v, i) => (
        <String key={i} initNoteIdx={v[1]} correctNoteIdx={v[0]} />
      ))}
    </Container>
  );
};

export default StringGroup;
