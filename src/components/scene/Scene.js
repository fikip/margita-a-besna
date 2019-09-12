/** Created by Filip Drgoň on 12/09/2019. */

import React from "react";
import Separator from "../common/Separator";

const Scene = props => (
  <section
    className="react-transition swipe-up scene-container"
    style={{ animationDuration: "1s" }}
  >
    <section className="scene-section"></section>
    <Separator />
    <section className="text-section"></section>
  </section>
);

Scene.propTypes = {};
Scene.defaultProps = {};

export default Scene;
