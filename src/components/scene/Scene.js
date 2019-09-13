/** Created by Filip Drgoň on 12/09/2019. */

import React, { useState } from "react";
import Separator from "../common/Separator";
import Typist from "react-typist";
import classNames from "classnames";

import ButtonLightBluePng from "../../img/btn_down_lightblue.png";
import ButtonLink from "../common/ButtonLink";

const Scene = props => {
  const [showButton, setShowButton] = useState(false);
  return (
    <section
      className="react-transition swipe-up scene-container"
      style={{ animationDuration: "1s" }}
    >
      <section className="scene-section"></section>
      <Separator scene />
      <section className="text-section">
        <Typist startDelay={1500} onTypingDone={() => setShowButton(true)}>
          <div className="chapter-title">Chapter 1</div>
          <Typist.Delay ms={1000} />
          <span className="chapter-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <br />
          <br />
          <Typist.Delay ms={1000} />
          <span className="chapter-text">
            Pellentesque consectetur metus quis quam suscipit, et facilisis
            tellus vulputate.
          </span>
          <br />
          <br />
          <Typist.Delay ms={1000} />
          <span className="chapter-text">
            Mauris et magna vel ex malesuada ullamcorper lacinia nec nulla.
          </span>
        </Typist>
        <ButtonLink
          src={ButtonLightBluePng}
          alt="Continue to next chapter"
          className={classNames("button-next", { showButton })}
          to={"/scene/2"}
        />
      </section>
    </section>
  );
};

Scene.propTypes = {};
Scene.defaultProps = {};

export default Scene;
