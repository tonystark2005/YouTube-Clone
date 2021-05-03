import React from "react";
import { HomePage, UI } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/test" exact component={test} /> */}
        <Route path="/ui" exact component= {UI} />
      </Switch>
    </Router>
  );
}

export default App;
