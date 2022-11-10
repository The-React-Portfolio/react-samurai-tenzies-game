/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";

export const AppFooter = () => {
  return (
    <footer className="appFooter">
      <div className="borderBoxContainer">
        <div className="text">
          <h4>Tenzies Production <br/>React Tenzies Game</h4>
          <p>React Tenzies is a sample portfolio project designed to help grasp the basics of react.js
          state manangement system. This was developed after viewing a <a
          href="https://scrimba/com">Scrimba</a> based tutorial on YouTube</p>
        </div>
      </div>
    </footer>
  );
};
