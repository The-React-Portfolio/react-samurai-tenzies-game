/* react imports */
import React, { useState, useEffect } from "react";

/* app imports */
import "./styles.scss";
import { LockComponent } from "./lock-component.js";
import { setCardAsLocked } from "./service/set-card-as-locked.js";
import { setCardAsUnlocked } from "./service/set-card-as-unlocked.js";
import selectionSound from "@appSounds/selection-sound.wav";
import deselectionSound from "@appSounds/deselect-sound.wav";

export const Card = (props) => {
  let [isLocked, setIsLocked] = useState(props.isLocked);
  let [hasUpdated, setHasUpdated] = useState(false);
  let [soundEffects] = useState({
    lock: new Audio(selectionSound),
    unlock: new Audio(deselectionSound)
  });

  const onClickHandler = () => {
    setIsLocked((prevState) => {
      const newLockState = !prevState;
      newLockState === true ? soundEffects.lock.play() : soundEffects.unlock.play();
      return newLockState;
    });
  };

  /* after component load */
  useEffect(() => {
    if (isLocked) {
      setCardAsLocked(props.cardId);
    }
    else {
      setCardAsUnlocked(props.cardId);
    }
    props.afterLockStateChange();
  }, [isLocked]);

  return (
    <div className="card positionRelative" onClick={onClickHandler}>
      { props.children }
      <LockComponent isLocked={isLocked}/>
    </div>
  );
};
