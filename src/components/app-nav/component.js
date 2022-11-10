/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import appNavIcon from "@appIcons/app-icon-ffffff.svg";

export const AppNav = () => {
  return (
    <nav className="appNav">
      <div className="borderBoxContainer">
        <img src={appNavIcon} className="img-fluid"
        alt="React Tenzies Game" title="React Tenzies Game"/>
        {`Tenzies Production`}
      </div>
    </nav>
  );
};
