import React from "react";
import ReactDOM from "react-dom";

// LAZY LOADING
const NavBar1 = React.lazy(() => import("./NavBars/NavBar1/NavBar1"));
const NavBar2 = React.lazy(() => import("./NavBars/NavBar2/NavBar2"));
const NavBar3 = React.lazy(() => import("./NavBars/NavBar3/NavBar3"));
const NavBar4 = React.lazy(() => import("./NavBars/NavBar4/NavBar4"));

function NavBar() {
  const randomNumber = Math.floor(Math.random() * 3),
    navBar = (
      <div className="navbar">
        {randomNumber === 0 ? (
          <NavBar1 />
        ) : randomNumber === 1 ? (
          <NavBar2 />
        ) : randomNumber === 2 ? (
          <NavBar3 />
        ) : (
          <NavBar4 />
        )}
      </div>
    );
  return ReactDOM.createPortal(navBar, document.getElementById("navbar"));
}

export default NavBar;
