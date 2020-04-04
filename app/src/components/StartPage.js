import React from "react";
import { Button } from "@material-ui/core";

export const StartPage = ({ setStarted }) => {
  return (
    <>
      StartPage <Button onClick={setStarted}>Start</Button>
    </>
  );
};
