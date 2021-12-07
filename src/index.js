import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./combineStore";
import "normalize.css";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
