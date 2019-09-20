/** Created by Filip Drgoň on 12/09/2019. */
import React from "react";
import PropTypes from "prop-types";
import Separator from "../common/Separator";
import ButtonLink from "../common/ButtonLink";

import FlagEn from "../../img/flag_en_256.png";
import FlagSk from "../../img/flag_sk_256.png";
import { useIntl } from "react-intl";

const Intro = ({ locale, setLocale }) => {
  const isEnglish = locale === "en";
  const { formatMessage } = useIntl();
  return (
    <section
      className="react-transition fade-in intro-container"
      style={{ animationDuration: "1s" }}
    >
      <Separator orientation="ltr" />
      <div className="intro-center-container">
        <h1> {formatMessage({ id: "common.title" })}</h1>
        <ButtonLink
          to={"scene/1"}
          text={formatMessage({ id: "intro.start" })}
        />
      </div>
      <img
        src={isEnglish ? FlagSk : FlagEn}
        alt={isEnglish ? "Slovak flag" : "British flag"}
        onClick={() => setLocale(isEnglish ? "sk" : "en")}
        className={"intro-flag"}
      />
      <Separator orientation="rtl" />
    </section>
  );
};

Intro.propTypes = {
  locale: PropTypes.string,
  setLocale: PropTypes.func
};

export default Intro;
