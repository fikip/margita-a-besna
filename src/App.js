import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "react-typist/dist/Typist.css";
import "./styles/App.scss";
import "./styles/react-transitions.css";

import Intro from "./components/intro/Intro";
import Scene from "./components/scene/Scene";
import Menu from "./components/common/Menu";
function App() {
  return (
    <Router>
      <Menu />
      <div className="transition-container">
        <Route path="/" exact component={Intro} />
        <Route path="/scene/:id" component={Scene} />
      </div>
    </Router>
  );
}

export default App;
