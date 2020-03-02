import React, { useState, useEffect } from "react";

import StringGroup from "./StringGroup";

const getStartingData = async () => {
  const res = await fetch("http://localhost:5000/start");
  const data = await res.json();
  // console.log(data);
  return data;
};

function App() {
  const [startingData, setStartingData] = useState(null);

  useEffect(() => {
    getStartingData()
      .then(res => setStartingData(res))
      .catch(error => console.log(error));
  }, []);
  // console.log(startingData);

  if (!startingData) {
    return <>Loading...</>;
  }
  return <StringGroup {...startingData} />;
}

export default App;
