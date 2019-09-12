/** Created by Filip Drgoň on 12/09/2019. */

import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import useReactRouter from "use-react-router";

import ButtonLink from "./ButtonLink";

const Menu = props => {
  const { location } = useReactRouter();
  const intro = location.pathname === "/";
  return (
    <nav className={classnames("menu", { intro })}>
      <NavLink to="/" exact className={classnames("title", { intro })}>
        Margita a Besná
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <a href="https://fikip.filipdrgon.now.sh">My portfolio</a>
      <ButtonLink
        to="/about"
        text="Start over"
        className={classnames({ intro })}
      />
    </nav>
  );
};

export default Menu;
