/** Created by Filip Drgoň on 12/09/2019. */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, text, className }) => {
  return (
    <Link to={to}>
      <button className={`round-button ${className}`}>{text}</button>
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string
};
ButtonLink.defaultProps = {
  className: ""
};

export default ButtonLink;
