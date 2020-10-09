import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchGIF from "./containers/SearchGIF/SearchGIF";
import SingleGif from "./containers/SingleGIFPage/SingleGIFPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SearchGIF} />
        <Route path="/gif/:id" exact component={SingleGif} />
      </Switch>
    </div>
  );
}

export default App;
