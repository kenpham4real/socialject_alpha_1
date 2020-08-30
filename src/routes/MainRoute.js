import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import ExplorePage from "../pages/app/searching_project_user/ExplorePage";
import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";

// react-router-dom

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="" component={ProjectInfoPage} />
      </Switch>
    </Router>
  );
};

export default MainRoute;
