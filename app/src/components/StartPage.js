import React, { useState } from "react";
import { Button, Slider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  slider: {
    width: 300
  }
});

export const StartPage = ({ setStarted, setDifficulty }) => {
  const [difficultySelection, setDifficultySelection] = useState(1);

  const classes = useStyles();
  const handleChange = (e, v) => {
    setDifficultySelection(v);
  };
  const handleStart = () => {
    setDifficulty(difficultySelection);
    setStarted(true);
  };

  return (
    <>
      Difficulty: {difficultySelection}
      <div className={classes.slider}>
        <Slider
          value={difficultySelection}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={6}
          onChange={handleChange}
        />
      </div>
      <Button variant="outlined" onClick={() => handleStart()}>
        Start
      </Button>
    </>
  );
};
