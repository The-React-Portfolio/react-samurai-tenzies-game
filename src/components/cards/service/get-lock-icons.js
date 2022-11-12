/**
  * helps to generate an object that contains the path to the lock icons in the app
  */

import openedLockIcon from "@appIcons/opened-lock-icon.svg";
import closedLockIcon from "@appIcons/closed-lock-icon.svg";

export const getLockIcons = () => {
  const icons = {
    openedLockIcon,
    closedLockIcon
  };
  return Object.assign({}, icons);
};
