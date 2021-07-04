import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

// Import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/@popperjs/core/dist/umd/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// Import project pro-sidebar
import "react-pro-sidebar/dist/css/styles.css";

// Attach store to app that we can manage all states of app
import { Provider } from "react-redux";
import store from "./utils/configureStore";

// optional configuration for alert
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
