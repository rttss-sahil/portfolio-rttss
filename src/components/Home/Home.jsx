import React from "react";
const Home1 = React.lazy(() => import('./Home1/Home1'));

function Home({ randomNumber }) {
  return (
    <React.Fragment>
      <Home1 randomNumber={randomNumber} />
    </React.Fragment>
  );
}

export default Home;
