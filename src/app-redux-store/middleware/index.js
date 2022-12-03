/**
  * this gives the ability to use middleware along with the redux dev tools instance to track state
  * changes in the app
  **/

/* node modules imports */
import { applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

/* app imports */
import { samuraiMiddleware } from "./samurai-api-fetch/index.js";

export const appMiddlewareCentral = () => {
  return composeWithDevTools(
    applyMiddleware(samuraiMiddleware)
  );
};
