/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import creative1 from "@appImages/creative-01-fff.svg";
import creative2 from "@appImages/creative-02-fff.svg";
import creative3 from "@appImages/creative-03-fff.svg";
import creative4 from "@appImages/creative-04-fff.svg";

export const AppFooter = () => {
  return (
    <footer className="appFooter">
      <div className="borderBoxContainer customRow">
        <div className="text">
          <h4>Tenzies Production <br/>React Tenzies Game</h4>
          <p>React Tenzies is a sample portfolio project designed to help grasp the basics of react.js
          state manangement system. This was developed after viewing a <a
          href="https://scrimba/com">Scrimba</a> based tutorial on YouTube</p>
        </div>
        <ul className="list-group creativeList">
          <li>
            <img src={creative1} className="img-fluid"/>
          </li>
          <li>
            <img src={creative2} className="img-fluid"/>
          </li>
          <li>
            <img src={creative3} className="img-fluid"/>
          </li>
          <li>
            <img src={creative4} className="img-fluid"/>
          </li>
        </ul>
      </div>
    </footer>
  );
};
