/* react imports */
import React, { useState } from "react";

/* app imports */
import "./styles.scss";
import { getLockIcons } from "./service/get-lock-icons.js";

export const Card = (props) => {
  let lockIcons = getLockIcons();
  let [isLocked, setIsLocked] = useState(props.data.isLocked);

  /* set these which will be used in the component */
  const lockClassString = isLocked ? "lockIcon locked" : "lockIcon";
  const lockNameString = isLocked ? "Locked" : "Open";
  const lockSrc = isLocked ? lockIcons.closedLockIcon : lockIcons.openedLockIcon;

  return (
    <div className="card positionRelative">
      <div className="image positionRelative">
        <img src={props.data.icon} className="img-fluid mx-auto"
        alt={props.data.name} title={props.data.name}/>
      </div>
      <div className={`${lockClassString}`}>
        <img src={lockSrc}
        className="img-fluid" alt={lockNameString} title={lockNameString}/>
      </div>
    </div>
  );
};
