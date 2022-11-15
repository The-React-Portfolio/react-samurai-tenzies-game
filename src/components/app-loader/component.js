/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import appLoaderIcon from "@appIcons/loader-icon.gif";

export const AppLoader = () => {
  return (
    <div className="appLoader">
      <img src={appLoaderIcon} className="img-fluid" alt="Loading..." title="Loading..."/>
    </div>
  );
};
