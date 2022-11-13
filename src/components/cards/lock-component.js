/* react imports */
import React from "react";

/* app imports */
import { getLockIcons } from "./service/get-lock-icons.js";
const lockIcons = getLockIcons();

export const LockComponent = (props) => {
  /* set values */
  const lockClassString = props.isLocked ? "lockIcon locked" : "lockIcon";
  const lockNameString = props.isLocked ? "Locked" : "Open";
  const lockSrc = props.isLocked ? lockIcons.closedLockIcon : lockIcons.openedLockIcon;

  return (
    <div className={`${lockClassString}`}>
      <img src={lockSrc}
      className="img-fluid" alt={lockNameString} title={lockNameString}/>
    </div>
  );
};
