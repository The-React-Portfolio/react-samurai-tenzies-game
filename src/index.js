/* node modules imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

/* app imports */
import { App } from './App';
import { appReduxStore } from "./app-redux-store/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appReduxStore()}>
    <App />
  </Provider>
);
