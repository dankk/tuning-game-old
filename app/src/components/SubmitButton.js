import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const SubmitButton = ({ ...props }) => {
  const [open, setOpen] = useState(props.showingResult);
  const [result, setResult] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setResult({ severity: "success", message: "Correct!" });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const doOnClick = () => {
    setIsDisabled(true);
    const isCorrect = props.submitHandler();

    if (isCorrect) {
      setResult({ severity: "success", message: "Correct!" });
    } else {
      setResult({ severity: "error", message: "Wrong..." });
    }
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        disabled={isDisabled}
        onClick={() => doOnClick()}
      >
        Submit
      </Button>
      {result ? (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={1500}>
          <Alert onClose={() => handleClose()} severity={result.severity}>
            {result.message}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
};
