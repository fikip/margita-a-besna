/** Created by Filip Drgoň on 12/09/2019. */

import React, { useState } from "react";
import Separator from "../common/Separator";
import Typist from "react-typist";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";

import ButtonLightBluePng from "../../img/btn_down_lightblue.png";
import CurtainLeft from "../../img/curtain_left.png";
import CurtainRight from "../../img/curtain_right.png";
import CurtainTop from "../../img/curtain_top.png";
import Rail from "../../img/rail.png";
import ButtonLink from "../common/ButtonLink";

const Scene = ({ match }) => {
  const { id } = match.params;
  console.log(id);
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const leftSpring = useSpring({
    from: { left: "0%" },
    to: { left: "-43%" },
    config: {
      duration: 1000
    },
    delay: 2000,
    onRest: () => setShowHeader(true)
  });
  const rightSpring = useSpring({
    from: { left: "0%" },
    to: { left: "40%" },
    config: {
      duration: 1000
    },
    delay: 2000,
    onRest: () => setShowHeader(true)
  });
  return (
    <section
      className="react-transition swipe-up scene-container"
      style={{ animationDuration: "1s" }}
    >
      <section className="scene-section">
        <div className="top-curtain">
          <img
            className="top-curtain-wing"
            src={CurtainTop}
            alt="curtain top"
          />
        </div>
        <div className="bottom-curtain">
          <animated.img
            src={CurtainLeft}
            alt="curtain left wing"
            className="curtain-wing left"
            style={leftSpring}
          />
          <animated.img
            src={CurtainRight}
            alt="curtain right wing"
            className="curtain-wing right"
            style={rightSpring}
          />
          <img src={Rail} className="rail" alt="curtain rail" />
        </div>
      </section>
      <Separator scene />
      <section className="text-section">
        <h1 className="chapter-title">
          {showHeader && (
            <Typist
              startDelay={1500}
              onTypingDone={() => setShowText(true)}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
            >
              Chapter 1
            </Typist>
          )}
        </h1>
        {showText && (
          <Typist startDelay={1500} onTypingDone={() => setShowButton(true)}>
            <span className="chapter-text">
              A barge skims down the stream,
              <br />
              company giddy and gleam;
            </span>
            <br />
            <br />
            <Typist.Delay ms={1000} />
            <span className="chapter-text">
              Alas!
              <br />
              The ghastly gulch approaches,
              <br />
              sailors’ merry carols abate;
              <br />
              Witness the two mighty masses,
              <br />
              Margita, unruffled, a steady bait.
            </span>
            <br />
            <br />
            <Typist.Delay ms={1000} />
            <span className="chapter-text">
              Harken! ’Tis her raging stepdame,
              <br />
              Besná, fierce and dire.
              <br />
              shun her angst, lest we acclaim,
              <br />
              an affair with hellfire.
              <br />
            </span>
          </Typist>
        )}
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
