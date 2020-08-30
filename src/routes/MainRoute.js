import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import ExplorePage from "../pages/app/searching_project_user/ExplorePage";
import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";
import ChooseType from "../pages/app/searching_project_user/ChooseType";

// react-router-dom

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projectInfo" component={ProjectInfoPage} />
        <Route path="/chooseType" component={ChooseType} />
        <Route path="" component={ExplorePage} />
      </Switch>
    </Router>
  );
};

export default MainRoute;
