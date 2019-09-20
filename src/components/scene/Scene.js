/** Created by Filip Drgoň on 12/09/2019. */

import React, { useState } from "react";
import Separator from "../common/Separator";
import Typist from "react-typist";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import { useIntl } from "react-intl";
import useReactRouter from "use-react-router";

import ButtonLightBluePng from "../../img/btn_down_lightblue.png";
import CurtainLeft from "../../img/curtain_left.png";
import CurtainRight from "../../img/curtain_right.png";
import CurtainTop from "../../img/curtain_top.png";
import Rail from "../../img/rail.png";
import poemStructure from "../../intl/poemStructure";
import ImageLink from "../common/ImageLink";
import { wait } from "../../utils";

const Scene = ({ match, locale, ...props }) => {
  const { history } = useReactRouter();
  const { formatMessage } = useIntl();
  const { id } = match.params;
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [close, setClose] = useState(false);
  const leftSpring = useSpring({
    from: { left: close ? "-43%" : "0%" },
    to: { left: close ? "0%" : "-43%" },
    config: {
      duration: 1000
    },
    delay: 2000,
    onRest: () => setShowHeader(true)
  });
  console.log(leftSpring);
  const rightSpring = useSpring({
    from: { left: close ? "-40%" : "0%" },
    to: { left: close ? "0%" : "40%" },
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
        {id < 6 && (
          <ImageLink
            src={ButtonLightBluePng}
            alt="Continue to next chapter"
            className={classNames("button-next", { showButton })}
            onClick={async () => {
              setClose(true);
              await wait(4000);
              setShowButton(false);
              setShowText(false);
              setShowHeader(false);
              setClose(false);
              await wait(4000);
              history.push(`/scene/${Number(id) + 1}`);
            }}
          />
        )}
      </section>
    </section>
  );
};

Scene.propTypes = {};
Scene.defaultProps = {};

export default Scene;
