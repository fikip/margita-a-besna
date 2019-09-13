/** Created by Filip Drgoň on 12/09/2019. */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SeparatorPng from "../../img/Separator_2.png";
const Separator = ({ orientation, scene }) => (
  <img
    src={SeparatorPng}
    alt="Folk art separator"
    className={classnames(`separator`, orientation, { scene })}
  />
);

Separator.propTypes = {
  orientation: PropTypes.oneOf(["ltr", "rtl"])
};
Separator.defaultProps = {
  orientation: "ltr"
};

export default Separator;
