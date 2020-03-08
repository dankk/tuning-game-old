import React, { useState, useEffect } from "react";

import StringGroup from "./StringGroup";
import { Container, makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    textAlign: "center"
  }
});

const getStartingData = async () => {
  const res = await fetch("http://localhost:5000/start");
  const data = await res.json();
  // console.log(data);
  return data;
};

function App() {
  const classes = useStyle();
  const [startingData, setStartingData] = useState(null);

  useEffect(() => {
    getStartingData()
      .then(res => setStartingData(res))
      .catch(error => console.log(error));
  }, []);

  if (!startingData) {
    return <>Loading...</>;
  }
  return (
    <Container className={classes.root}>
      <StringGroup {...startingData} />
      <Button>Submit</Button>
    </Container>
  );
}

export default App;
