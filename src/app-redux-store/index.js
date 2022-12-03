/**
  * main entry file for the application's redux store
  **/

/* node modules import */
import { createStore } from "redux";

/* app imports */
import { reducersCentral } from "./all-reducers.js";
import { appMiddlewareCentral } from "./middleware/index.js";

export const appReduxStore = () => {
  return createStore(
    reducersCentral(),
    appMiddlewareCentral()
  );
};
