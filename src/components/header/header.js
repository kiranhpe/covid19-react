import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeChanger from "../themeSwitch/themeChanger";
import "./header.scss";
export const Header = () => {
  return (
    <div className="cv-toolbar">
      <h2 className="cv-brand">
        <Link to="/" activeClassName="active">
          Covid-19 India
        </Link>
      </h2>
      <div className="right-side">
        <ul className="links-container">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/vaccination" activeClassName="active">
              <span>Vaccination</span>
            </NavLink>
          </li>
        </ul>
        <span className="cv-switch">
          <ThemeChanger></ThemeChanger>
        </span>
      </div>
    </div>
  );
};
