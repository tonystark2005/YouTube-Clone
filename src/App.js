import React from "react";
import { UI, YoutubeUI } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={YoutubeUI} />
        {/* <Route path="/test" exact component={test} /> */}
        <Route path="/ui" exact component= {UI} />
      </Switch>
      {/* <div>
        <UI></UI>
      </div>
      <div>
        <test></test>
      </div> */}
    </Router>
  );
}

export default App;
