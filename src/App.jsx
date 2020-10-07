import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CSS FILES
import "./refs/index.css";

// FILES IMPORT
import Loading from "./components/Others/Loading/Loading";
const NavBar = React.lazy(() => import("./components/Others/NavBar/NavBar"));
const Home = React.lazy(() => import("./components/Home/Home"));

// LAZY LOADING

// APP
function App() {
  const randomNumber = 0;
  // Math.floor(Math.random() * 3);
  return (
    <React.Fragment>
      <Suspense fallback={<Loading randomNumber={randomNumber} />}>
        <BrowserRouter>
          <NavBar randomNumber={randomNumber} />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
