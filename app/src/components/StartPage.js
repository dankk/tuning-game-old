import React, { useState } from "react";
import { Button, Slider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  slider: {
    width: 300
  }
});

export const StartPage = ({ setStarted, difficulty, setDifficulty }) => {
  const classes = useStyles();
  const handleChange = (e, v) => {
    setDifficulty(v);
  };

  return (
    <>
      Difficulty: {difficulty}
      <div className={classes.slider}>
        <Slider
          value={difficulty}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={6}
          onChange={handleChange}
        />
      </div>
      <Button variant="outlined" onClick={setStarted}>
        Start
      </Button>
    </>
  );
};
