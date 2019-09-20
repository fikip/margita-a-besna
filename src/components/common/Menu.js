/** Created by Filip Drgoň on 12/09/2019. */

import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import useReactRouter from "use-react-router";
import { useIntl } from "react-intl";

import ButtonLink from "./ButtonLink";

const Menu = props => {
  const { location } = useReactRouter();
  const { formatMessage } = useIntl();
  const intro = location.pathname === "/";
  return (
    <nav className={classnames("menu", { intro })}>
      <NavLink to="/" exact className={classnames("title", { intro })}>
        {formatMessage({ id: "common.title" })}
      </NavLink>
      <NavLink to="/about">{formatMessage({ id: "menu.about" })}</NavLink>
      <a href="https://fikip.filipdrgon.now.sh">
        {formatMessage({ id: "menu.portfolio" })}
      </a>
      <ButtonLink
        to="/scene/1"
        text={formatMessage({ id: "menu.restart" })}
        className={classnames({ intro })}
      />
    </nav>
  );
};

export default Menu;
