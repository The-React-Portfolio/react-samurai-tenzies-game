/* react imports */
import React from "react";

/* app imports */
import diceImage from "@appImages/dice.jpg";

export default function Header() {
  return (
    <React.Fragment>
      <div className="header positionRelative">
        <img src={diceImage} className="img-fluid dice" alt="React Tenzies Game" title="React Tenzies Game"/>
        <div className="text">
          <h1>React <br className="hidden-lg"/>Tenzies <br/>Game</h1>
          <p>{`Roll until all dice are the same. Click each die to freeze it as its current value
          between rolls.`}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
