import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SPU Pages
import ExplorePage from "../pages/app/searching_project_user/ExplorePage";
import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";
import ChooseType from "../pages/app/searching_project_user/ChooseType";


// PPU Pages
import Registration from "../pages/app/posting_project_user/Registration";
import BeautifyProfile from "../pages/app/posting_project_user/BeautifyProfile";
import FinishCreate from "../pages/app/posting_project_user/FinishCreate";
import ProfilePage from "../pages/app/posting_project_user/ProfilePage";

// react-router-dom

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projectInfo" component={ProjectInfoPage} />
        <Route path="/registration" component={Registration}/>
        <Route path="/beautifyProfile" component={BeautifyProfile}/>
        <Route path="/finishCreate" component={FinishCreate}/>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={ChooseType} />
        
      </Switch>
    </Router>
  );
};

export default MainRoute;
