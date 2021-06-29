import React from 'react';
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import { PageNotFound } from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import {history} from "./utils/history";

function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <Dashboard /> */}
      {/* <PageNotFound /> */}
      <Router history={history}>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
