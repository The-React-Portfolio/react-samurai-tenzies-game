/* react imports */
import React, { useRef, useState } from "react";

/* app imports */
import useButtonOnLoaded from "./hooks/use-button-on-loaded.js";

export default function RollButton(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonRef = useRef();

  /* custom */
  useButtonOnLoaded(buttonRef, setIsDisabled);

  return (
    <button disabled={isDisabled} ref={buttonRef} className="btn btn-primary btn-lg rollButton" type="button"
    onClick={props.onDiceRoll}>
      <span>Roll Dice</span>
    </button>
  );
};
