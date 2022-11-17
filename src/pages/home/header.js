/* react imports */
import React, { useState } from "react";

/* app imports */
import diceImage from "@appImages/dice.jpg";
import popupSound from "@appSounds/click-sound.mp3";

export default function Header() {
  const [textElementClass, setTextElementClass] = useState("text");
  const notificationSound = new Audio(popupSound);

  const onButtonClickHandler = () => {
    setTextElementClass("text show");
    notificationSound.play();
    setTimeout(() => {
      setTextElementClass("text");
    }, 6000);
  };

  return (
    <React.Fragment>
      <div className="header positionRelative customRow">
        <h1>Samurai <br/>Tenzies</h1>
        <button className="btn btn-light howToPlay" type="button" onClick={onButtonClickHandler}>
          How to Play?
        </button>
        <div className={textElementClass}>
          <p>{`Roll until all dice are the same. Click each die to freeze it as its current value
          between rolls.`}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
