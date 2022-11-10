/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";

import sampleCard from "@appImages/sample-card.svg";

export const Card = (props) => {
  return (
    <div className="card positionRelative">
      <div className="image positionRelative">
        <img src={sampleCard} className="img-fluid mx-auto"
        alt="Sample" title="Sample"/>
      </div>
    </div>
  );
};
