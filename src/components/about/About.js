/** Created by Filip Drgoň on 06/10/2019. */

import React from "react";
import { useIntl } from "react-intl";

const About = props => {
  const { formatMessage } = useIntl();
  return (
    <div className="react-transition fade-in about-container">
      <h1 className="about-title"> {formatMessage({ id: "about.title" })}</h1>
      <p>{formatMessage({ id: "about.p1" })}</p>
      <p>
        <>
          {formatMessage({ id: "about.p2" })}(
          <a href="https://zlatyfond.sme.sk/dielo/82/Botto_Margita-a-Besna/1#ftn.id2523094">
            link
          </a>
          ).
        </>
      </p>
      <p>{formatMessage({ id: "about.p3" })}</p>
      <p>
        <>
          {formatMessage({ id: "about.p4" })}
          <br />
          <a href="https://reactjs.org/">React</a>,{" "}
          <a href="https://github.com/jstejada/react-typist#readme">
            React-typist
          </a>
          ,{" "}
          <a href="https://github.com/react-spring/react-spring">
            React-spring
          </a>
          ,{" "}
          <a href="https://github.com/sambernard/react-preload">
            React-preload
          </a>
        </>
      </p>
      <ul></ul>
    </div>
  );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
