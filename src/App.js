import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Preload } from "react-preload";

import "react-typist/dist/Typist.css";
import "./styles/App.scss";
import "./styles/react-transitions.css";

import Intro from "./components/intro/Intro";
import Scene from "./components/scene/Scene";
import Menu from "./components/common/Menu";

import ButtonLightBluePng from "./img/btn_down_lightblue.png";
import CurtainLeft from "./img/curtain_left.png";
import CurtainRight from "./img/curtain_right.png";
import CurtainTop from "./img/curtain_top.png";
import Rail from "./img/rail.png";
import SeparatorPng from "./img/Separator_2.png";
import Loader from "./components/common/Loader";

function App() {
  const images = [
    ButtonLightBluePng,
    CurtainLeft,
    CurtainRight,
    CurtainTop,
    Rail,
    SeparatorPng
  ];
  return (
    <Router>
      <Menu />
      <div className="transition-container">
        <Preload
          loadingIndicator={<Loader />}
          images={images}
          autoResolveDelay={3000}
          resolveOnError={true}
          mountChildren={true}
        >
          <Route path="/" exact component={Intro} />
          <Route path="/scene/:id" component={Scene} />
        </Preload>
      </div>
    </Router>
  );
}

export default App;
