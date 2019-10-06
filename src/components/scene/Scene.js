/** Created by Filip Drgoň on 12/09/2019. */

import React, { useState } from "react";
import Separator from "../common/Separator";
import Typist from "react-typist";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import { useIntl } from "react-intl";
import useReactRouter from "use-react-router";

import ButtonLightBluePng from "../../img/btn_down_lightblue.png";
import ButtonBluePng from "../../img/btn_down_blue.png";
import ButtonLightGreenPng from "../../img/btn_down_lightgreen.png";
import CurtainLeft from "../../img/curtain_left.png";
import CurtainRight from "../../img/curtain_right.png";
import CurtainTop from "../../img/curtain_top.png";
import Scene1 from "../../img/Scene1.png";
import Scene2 from "../../img/Scene2.png";
import Scene3 from "../../img/Scene1.png"; // Identical to scene 1
import Scene4 from "../../img/Scene4.png";
import Scene5 from "../../img/Scene5.png";
import Scene6 from "../../img/Scene6.png";
import Rail from "../../img/rail.png";
import poemStructure from "../../intl/poemStructure";
import ImageLink from "../common/ImageLink";
import { wait } from "../../utils";
import Animation from "./Animation";

const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6];

const Scene = ({ match, locale, ...props }) => {
  const { history } = useReactRouter();
  const { formatMessage } = useIntl();
  const { id } = match.params;
  const nextSceneButton =
    id === "1" || id === "2"
      ? ButtonLightBluePng
      : id === "3" || id === "4"
      ? ButtonBluePng
      : ButtonLightGreenPng;
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [close, setClose] = useState(false);
  const leftSpring = useSpring({
    from: { left: close ? "-41%" : "0%" },
    to: { left: close ? "0%" : "-41%" },
    config: {
      duration: 1000
    },
    delay: 2000,
    onRest: () => setShowHeader(true)
  });
  const rightSpring = useSpring({
    from: { left: close ? "41%" : "0%" },
    to: { left: close ? "0%" : "41%" },
    config: {
      duration: 1000
    },
    delay: 2000 // We only need one onRest since these springs both trigger at the same time
  });
  return (
    <section
      className="react-transition fade-in scene-container"
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
        <div
          className="bottom-curtain"
          style={{
            backgroundImage: `url(${scenes[id - 1]})`
          }}
        >
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
          <Animation id={id} />
        </div>
      </section>
      <Separator scene />
      <section
        className={classNames("text-section", {
          sk: locale === "sk",
          closing: close
        })}
      >
        <h1 className="chapter-title">
          {showHeader && (
            <Typist
              startDelay={1500}
              onTypingDone={() => setShowText(true)}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
              key={id}
            >
              {formatMessage({ id: "chapter.title" }, { id })}
            </Typist>
          )}
        </h1>
        {showText && (
          <Typist
            startDelay={1500}
            onTypingDone={() => setShowButton(true)}
            key={id}
          >
            {poemStructure[locale][id].map((stanza, stanzaIndex) => (
              // Can't use fragments & undefined here because of Typist :(
              <span>
                {stanza.map((line, lineIndex) => (
                  <span>
                    {line}
                    {stanza.length > lineIndex + 1 ? <br /> : <span />}
                  </span>
                ))}
                {poemStructure[locale][id].length > stanzaIndex + 1 ? (
                  <span>
                    <br />
                    <br />
                    <Typist.Delay ms={1000} />
                  </span>
                ) : (
                  <span />
                )}
              </span>
            ))}
          </Typist>
        )}
        <ImageLink
          src={nextSceneButton}
          alt="Continue to next chapter"
          className={classNames("button-next", { showButton })}
          onClick={async () => {
            if (id < 6) {
              setClose(true);
              await wait(4000); // Wait for animations to finish safely.
              setShowButton(false);
              setShowText(false);
              setShowHeader(false);
              setClose(false);
              history.push(`/scene/${Number(id) + 1}`);
            } else {
              history.push(`/about`);
            }
          }}
        />
      </section>
    </section>
  );
};

Scene.propTypes = {};
Scene.defaultProps = {};

export default Scene;
