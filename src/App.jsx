import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CSS FILES
import "./refs/index.css";

// FILES IMPORT
import Loading from "./components/Others/Loading/Loading";
import NavBar from "./components/Others/NavBar/NavBar";
import Home from "./components/Home/Home";

// LAZY LOADING

// APP
function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/">{/* <Home /> */}</Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
