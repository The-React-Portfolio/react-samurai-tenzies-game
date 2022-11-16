/* react imports */
import React from "react";

/* app imports */
import diceImage from "@appImages/dice.jpg";

export default function Header() {
  return (
    <React.Fragment>
      <div className="header positionRelative customRow">
        <h1>Samurai <br/>Tenzies</h1>
        {/*
        <div className="text">
          <p>{`Roll until all dice are the same. Click each die to freeze it as its current value
          between rolls.`}</p>
        </div>
        */}
      </div>
    </React.Fragment>
  );
};
