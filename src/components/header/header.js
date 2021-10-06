import React from "react";
import ThemeChanger from "../themeSwitch/themeChanger";
import "./header.scss";
export const Header = () => {
  return (
    <div className="cv-toolbar">
      <h2 className="cv-brand">Covid-19 India</h2>
      <span className="cv-switch">
        <ThemeChanger></ThemeChanger>
      </span>
    </div>
  );
};
