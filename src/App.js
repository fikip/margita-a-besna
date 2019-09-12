import React from "react";
import "./styles/App.scss";
import "./styles/react-transitions.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Scene from "./components/scene/Scene";
import Menu from "./components/common/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <div className="transition-container">
        <Route path="/" exact component={Intro} />
        <Route path="/scene" component={Scene} />
      </div>
    </Router>
  );
}

export default App;
