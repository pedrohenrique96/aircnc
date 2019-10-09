import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import New from "./pages/New";

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/profile" component={Profile} />

    <Route path="/new" component={New} />
  </Switch>
);
