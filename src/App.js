/* react imports */
import React from "react";

/* app imports */
import '@commonStyles/App.scss';
import {AppNav} from "@components/app-nav/index.js";
import {AppFooter} from "@components/app-footer/component.js";
import {RootPage} from "@pages/home/component.js";

export const App = () => {
  return (
    <React.Fragment>
      <AppNav/>
      <RootPage/>
      <AppFooter/>
    </React.Fragment>
  );
};
