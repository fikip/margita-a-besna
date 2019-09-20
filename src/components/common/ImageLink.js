/** Created by Filip Drgoň on 20/09/2019. */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ImageLink = ({ className, src, alt, onClick }) => (
  <img
    src={src}
    alt={alt}
    className={classNames("img-button", className)}
    onClick={onClick}
  />
);

ImageLink.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func
};
ImageLink.defaultProps = {
  className: ""
};

export default ImageLink;
