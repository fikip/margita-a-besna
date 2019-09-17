/** Created by Filip Drgoň on 17/09/2019. */

import React from "react";

const Loader = () => (
  <div
    className="loader-container react-transition fade-in"
    style={{ animationDuration: "1s" }}
  >
    <div className="loader-text">Loading</div>
    <div className="loader-dots">
      <div className="loader-dot">.</div>
      <div className="loader-dot">.</div>
      <div className="loader-dot">.</div>
    </div>
  </div>
);

export default Loader;
