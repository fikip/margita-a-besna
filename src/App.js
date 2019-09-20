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
import CurtainLeft from "./img/curtain_left.png";
import CurtainRight from "./img/curtain_right.png";
import CurtainTop from "./img/curtain_top.png";
import Rail from "./img/rail.png";
import SeparatorPng from "./img/Separator_2.png";
import FlagEn from "./img/flag_en_256.png";
import FlagSk from "./img/flag_sk_256.png";
import messages from "./intl/messages";

function App() {
  const images = [
    ButtonLightBluePng,
    CurtainLeft,
    CurtainRight,
    CurtainTop,
    Rail,
    SeparatorPng,
    FlagEn,
    FlagSk
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
