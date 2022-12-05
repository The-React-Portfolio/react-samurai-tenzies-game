/* react imports */
import React, { useState } from "react";

/* app imports */
import popupSound from "@appSounds/click-sound.mp3";

export default function Header() {
  const [textElementClass, setTextElementClass] = useState("text hide");
  const notificationSound = new Audio(popupSound);

  const onButtonClickHandler = () => {
    /* kick start show process */
    setTextElementClass("text");
    setTimeout(() => {
      setTextElementClass("text show");
      notificationSound.play();
    }, 60);

    /* kick start the auto hide process */
    setTimeout(() => {
      setTextElementClass("text");
      setTimeout(() => {
        setTextElementClass("text hide");
      }, 180);
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
          <p>{`Roll until all samurai cards are the same. Click each card to freeze it as its current value
          between rolls.`}</p>
          <br/>
          <p>{`The 'Roll Dice' button is located at the bottom section after the cards.`}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
