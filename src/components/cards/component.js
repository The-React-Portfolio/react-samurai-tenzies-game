/* react imports */
import React, { useState } from "react";

/* app imports */
import "./styles.scss";
import { LockComponent } from "./lock-component.js";

export const Card = (props) => {
  let [isLocked, setIsLocked] = useState(props.isLocked);

  const onClickHandler = () => {
    setIsLocked((prevState) => !prevState);
  };

  return (
    <div className="card positionRelative" onClick={onClickHandler}>
      { props.children }
      <LockComponent isLocked={isLocked}/>
    </div>
  );
};
