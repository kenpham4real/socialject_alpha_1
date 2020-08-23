import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import ExplorePage from "../pages/app/searching_project_user/ExplorePage";
import ChooseType from "../pages/app/searching_project_user/ChooseType";

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Screen03" component={ChooseType} />
        <Route path="" component={ExplorePage} />
      </Switch>
    </Router>
  );
};

export default MainRoute;
