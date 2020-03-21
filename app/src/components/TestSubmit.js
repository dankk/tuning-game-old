import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const TestSubmit = ({ ...props }) => {
  const [open, setOpen] = useState(props.showingResult);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult({ severity: "success", message: "Correct!" });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const doOnClick = () => {
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
      <Button type="submit" onClick={() => doOnClick()}>
        Test
      </Button>
      {result ? (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
          <Alert onClose={() => handleClose()} severity={result.severity}>
            {result.message}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
};
