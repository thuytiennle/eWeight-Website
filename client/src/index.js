import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/@popperjs/core/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Import project pro-sidebar
import 'react-pro-sidebar/dist/css/styles.css';

// Attach store to app that we can manage all states of app
import {Provider} from "react-redux";
import store from './utils/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

