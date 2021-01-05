import React from "react";

// LAZY LOADING
const NavBar1 = React.lazy(() => import("./NavBars/NavBar1/NavBar1"));
// const NavBar2 = React.lazy(() => import("./NavBars/NavBar2/NavBar2"));
// const NavBar3 = React.lazy(() => import("./NavBars/NavBar3/NavBar3"));
// const NavBar4 = React.lazy(() => import("./NavBars/NavBar4/NavBar4"));

function NavBar({ randomNumber }) {
  return (
    <div className="navbar">
      {randomNumber === 0 && (
        <NavBar1 />
      )}
      {/* randomNumber === 1 ? ( */}
        {/* <NavBar2 /> */}
      {/* ) : randomNumber === 2 ? ( */}
        {/* <NavBar3 /> */}
      {/* ) : ( */}
        {/* <NavBar4 /> */}
    </div>
  );
}

export default NavBar;
