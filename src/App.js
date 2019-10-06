import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Preload } from "react-preload";
import { IntlProvider } from "react-intl";

import "react-typist/dist/Typist.css";
import "./styles/App.scss";
import "./styles/react-transitions.css";

import Intro from "./components/intro/Intro";
import Scene from "./components/scene/Scene";
import Menu from "./components/common/Menu";
import Loader from "./components/common/Loader";

import ButtonLightBluePng from "./img/btn_down_lightblue.png";
import ButtonBluePng from "./img/btn_down_blue.png";
import ButtonLightGreenPng from "./img/btn_down_lightgreen.png";
import CurtainLeft from "./img/curtain_left.png";
import CurtainRight from "./img/curtain_right.png";
import CurtainTop from "./img/curtain_top.png";
import Rail from "./img/rail.png";
import SeparatorPng from "./img/Separator_2.png";
import FlagEn from "./img/flag_en_256.png";
import FlagSk from "./img/flag_sk_256.png";
import Scene1 from "./img/Scene1.png";
import Scene2 from "./img/Scene2.png";
import Scene4 from "./img/Scene4.png";
import Scene5 from "./img/Scene5.png";
import Scene6 from "./img/Scene6.png";
import Man from "./img/Man.png";
import Raft from "./img/raft.png";
import Margita from "./img/Margita.png";
import Widow from "./img/Widow.png";

import messages from "./intl/messages";

function App() {
  const images = [
    ButtonLightBluePng,
    ButtonBluePng,
    ButtonLightGreenPng,
    CurtainLeft,
    CurtainRight,
    CurtainTop,
    Rail,
    SeparatorPng,
    FlagEn,
    FlagSk,
    Scene1,
    Scene2,
    Scene4,
    Scene5,
    Scene6,
    Man,
    Margita,
    Widow,
    Raft
  ];
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Menu setLocale={setLocale} />
        <div className="transition-container">
          <Preload
            loadingIndicator={<Loader />}
            images={images}
            autoResolveDelay={3000}
            resolveOnError={true}
            mountChildren={true}
          >
            <Route
              path="/"
              exact
              render={props => (
                <Intro
                  {...props}
                  setLocale={locale => {
                    localStorage.setItem("locale", locale);
                    setLocale(locale);
                  }}
                  locale={locale}
                />
              )}
            />
            <Route
              path="/scene/:id"
              render={props => <Scene {...props} locale={locale} />}
            />
          </Preload>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
