/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import Header from "./header.js";
import BodySection from "./body-section.js";

export const RootPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="borderBoxContainer">
          <Header/>
          <BodySection/>
        </div>
      </main>
    </React.Fragment>
  );
};
