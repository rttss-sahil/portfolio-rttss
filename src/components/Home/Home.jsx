import React from "react";
import Home1 from "./Home1/Home1";

function Home({ randomNumber }) {
  return (
    <React.Fragment>
      <Home1 randomNumber={randomNumber} />
    </React.Fragment>
  );
}

export default Home;
