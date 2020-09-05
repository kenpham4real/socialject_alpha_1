import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SPU Pages
import ExplorePage from "../pages/app/searching_project_user/ExplorePage";
import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";
import ChooseType from "../pages/app/searching_project_user/ChooseType";

// PPU Pages
import ProfilePage from "../pages/app/posting_project_user/ProfilePage";
import CreatePostModal from "../pages/app/posting_project_user/CreatePostModal";
import CreatePostModal_2 from "../pages/app/posting_project_user/CreatePostModal_2";
import CreatePostModal_3 from "../pages/app/posting_project_user/CreatePostModal_3";
// react-router-dom

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="" component={CreatePostModal} />
        <Route path="" component={ProfilePage} />
        <Route path="/projectInfo" component={ProjectInfoPage} />
        <Route path="/chooseType" component={ChooseType} />
        <Route path="" component={ExplorePage} />
      </Switch>
    </Router>
  );
};

export default MainRoute;
