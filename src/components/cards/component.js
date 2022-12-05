/* react imports */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

/* app imports */
import "./styles.scss";
import { LockComponent } from "./lock-component.js";
import selectionSound from "@appSounds/selection-sound.wav";
import deselectionSound from "@appSounds/deselect-sound.wav";
import { lockCardById, unlockCardById } from "@appReduxStore/actions/card-actions.js";
import { checkIfGameIsComplete } from "@appReduxStore/actions/game-state-actions.js";

export const Card = (props) => {
  const dispatchToReduxStore = useDispatch();
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
      dispatchToReduxStore(lockCardById(props.cardId));
    }
    else {
      dispatchToReduxStore(unlockCardById(props.cardId))
    }
    dispatchToReduxStore(checkIfGameIsComplete());
  }, [isLocked]);

  return (
    <div className="card positionRelative" onClick={onClickHandler}>
      { props.children }
      <LockComponent isLocked={isLocked}/>
    </div>
  );
};
