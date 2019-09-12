/** Created by Filip Drgoň on 12/09/2019. */
import React from "react";

import Separator from "../common/Separator";
import ButtonLink from "../common/ButtonLink";

const Intro = props => (
  <section
    className="react-transition swipe-up intro-container"
    style={{ animationDuration: "1s" }}
  >
    <Separator orientation="ltr" />
    <div className="intro-center-container">
      <h1>Margita a Besna</h1>
      <ButtonLink to={"scene"} text={"Start the story"} />
    </div>
    <Separator orientation="rtl" />
  </section>
);

Intro.propTypes = {};
Intro.defaultProps = {};

export default Intro;
