/** Created by Filip Drgoň on 05/10/2019. */

import React from "react";
import PropTypes from "prop-types";
import { animated, useSpring } from "react-spring";
import Raft from "../../img/raft.png";
import Man from "../../img/Man.png";
import Margita from "../../img/Margita.png";
import Widow from "../../img/Widow.png";
import Scene4Hut from "../../img/Scene4_hut.png";
import { wait } from "../../utils";

const Animation = ({ id }) => {
  const [raft6Spring, setRaft6Spring] = useSpring(() => ({
    from: { right: "40%", bottom: "25%" },
    config: {
      duration: 1500
    }
  }));
  const [widow5Spring, setWidow5Spring] = useSpring(() => ({
    from: { opacity: 1, bottom: "55%", left: "0%", width: "12%" },
    config: {
      duration: 1500
    }
  }));
  const [widow4Spring, setWidow4Spring] = useSpring(() => ({
    from: { bottom: "17%", left: "33%" },
    config: {
      duration: 1500
    }
  }));
  const [widowSpring, setWidowSpring] = useSpring(() => ({
    from: { bottom: "0%", left: "0%" },
    config: {
      duration: 1500
    }
  }));
  const [margitaSpring, setMargitaSpring] = useSpring(() => ({
    from: { opacity: 1, left: "35%", top: "55%", width: "15%" },
    config: {
      duration: 750
    }
  }));
  const [manSpring, setManSpring] = useSpring(() => ({
    from: { left: "0%" },
    config: {
      duration: 1500
    }
  }));

  const raftSpring = useSpring({
    from: { right: "0%", bottom: "-10%" },
    to: { right: "25%", bottom: "10%" },
    delay: 3000,
    config: {
      duration: 1500
    }
  });

  switch (id) {
    case "6":
      wait(3000).then(() =>
        setRaft6Spring({
          to: { right: "45%", bottom: "45%" }
        })
      );
      return (
        <animated.img
          src={Raft}
          alt="Raft"
          className="animation animated-raft-6"
          style={raft6Spring}
        />
      );
    case "5":
      wait(3000).then(() =>
        setWidow5Spring({
          to: [
            { opacity: 1, left: "35%", bottom: "65%", width: "12%" },
            { opacity: 0, left: "35%", bottom: "60%", width: "10%" }
          ]
        })
      );
      return (
        <animated.img
          src={Widow}
          alt="Widow"
          className="animation animated-widow-4"
          style={widow5Spring}
        />
      );
    case "4":
      wait(3000).then(() => {
        setWidow4Spring({
          to: [
            { bottom: "17%", left: "50%" },
            { bottom: "17%", left: "33%" },
            { bottom: "19%", left: "33%" },
            { bottom: "17%", left: "33%" },
            { bottom: "17%", left: "100%" }
          ]
        });
      });
      return (
        <>
          <img src={Scene4Hut} alt="Scene 4 hut" className="animation hut" />
          <animated.img
            src={Widow}
            alt="Widow"
            className="animation animated-widow-4"
            style={widow4Spring}
          />
        </>
      );
    case "3":
      wait(3000).then(() => {
        setWidowSpring({ to: { bottom: "17%", left: "33%" } });
        wait(1500).then(() => {
          setMargitaSpring({
            to: [
              { opacity: 1, left: "45%", top: "55%", width: "15%" },
              { opacity: 0, left: "45%", top: "70%", width: "12%" }
            ]
          });
        });
      });
      return (
        <>
          <animated.img
            src={Widow}
            alt="Man"
            className="animation animated-widow"
            style={widowSpring}
          />
          <animated.img
            src={Margita}
            alt="Man"
            className="animation animated-margita"
            style={margitaSpring}
          />
        </>
      );
    case "2":
      wait(3000).then(() => setManSpring({ left: "55%" }));
      return (
        <animated.img
          src={Man}
          alt="Man"
          className="animation animated-man"
          style={manSpring}
        />
      );
    case "1":
    default:
      return (
        <animated.img
          src={Raft}
          alt="Raft"
          className="animation animated-raft"
          style={raftSpring}
        />
      );
  }
};

Animation.propTypes = { id: PropTypes.string.isRequired };

export default Animation;
