/* node module imports */
import { configureStore } from "@reduxjs/toolkit";

/* app imports */
import { rootMiddleware } from "./middleware/root-middleware.js";
import { rootReducer } from "./reducers/root-reducer.js";

export const appRTKStore = () => {
  return configureStore({
    reducer: rootReducer(),
    middleware: rootMiddleware
  });
};
