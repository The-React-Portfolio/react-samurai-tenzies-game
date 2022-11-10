/* react imports */
import React from "react";

/* app imports */
import "./styles.scss";
import Header from "./header.js";

export const RootPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="borderBoxContainer">
          <Header/>
        </div>
      </main>
    </React.Fragment>
  );
};
