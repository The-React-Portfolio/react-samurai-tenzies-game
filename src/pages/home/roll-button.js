/* react imports */
import React, { useRef, useState } from "react";

/* app imports */
import useButtonOnLoaded from "./service/use-button-on-loaded.js";

export default function RollButton() {
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonRef = useRef();

  /* custom */
  useButtonOnLoaded(buttonRef, setIsDisabled);

  return (
    <button disabled={isDisabled} ref={buttonRef} className="btn btn-primary btn-lg rollButton" type="button">
      <span>Roll Dice</span>
    </button>
  );
};
