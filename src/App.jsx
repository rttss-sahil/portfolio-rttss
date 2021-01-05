import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// FILES IMPORT
import Loading from "./components/Others/Loading/Loading";
const Home = React.lazy(() => import("./components/Home/Home"));

// LAZY LOADING

// APP
function App() {
  const randomNumber = 1;
  // Math.floor(Math.random() * 3);
  return (
    <React.Fragment>
      <Suspense fallback={<Loading randomNumber={randomNumber} />}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home randomNumber={randomNumber} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
