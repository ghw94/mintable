import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={dashboard} />
      {/* <Route path="/">
            <h1>{DASHBOARD.name}</h1>
          </Route>
          <Route path="/">
            <h1>{LISTING.name}</h1>
          </Route>
          <Route path="/">
            <h1>{PROFILE.name}</h1>
          </Route> */}
    </Switch>
  );
};

export default Routes;
