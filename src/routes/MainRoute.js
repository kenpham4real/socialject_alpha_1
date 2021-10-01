import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SPU Pages
// import ExplorePage from "../pages/app/searching_project_user/ExplorePage";

import ProjectInfoPage from "../pages/app/searching_project_user/ProjectInfoPage";
// import ChooseType from "../pages/app/searching_project_user/ChooseType";
import ChooseType_Ken from "../pages/app/searching_project_user/ChooseType_Ken";

// PPU Pages
import Registration from "../pages/app/posting_project_user/CreateProfile/Registration";
import BeautifyProfile from "../pages/app/posting_project_user/CreateProfile/BeautifyProfile";
import FinishCreate from "../pages/app/posting_project_user/CreateProfile/FinishCreate";
import ProfilePage from "../pages/app/posting_project_user/ProfilePage";
import CreatePostModal from "../pages/app/posting_project_user/CreatingModal/CreatePostModal";
import CreatePostModal_2 from "../pages/app/posting_project_user/CreatingModal/CreatePostModal_2";
import CreatePostModal_3 from "../pages/app/posting_project_user/CreatingModal/CreatePostModal_3";
import AddActivityModal from "../pages/app/posting_project_user/AddActivityModal";

import ProfilePage_example from "../pages/app/posting_project_user/ProfilePage_example.js";

import LoginPage from "../pages/auth/LoginPage";
import ChoosingUser from "../pages/auth/ChoosingUser";

import ApplyForm from "../pages/app/searching_project_user/ApplyForm";

// react-router-dom

const MainRoute = () => {
  return (
    <Router basename = "/socialJect">
        {/* <Route path="/profile/createPostModal/:profileId" component={CreatePostModal} /> */}
        <Route exact path = "/profile" component = {ProfilePage} />
        <Route exact path = "/beautifyProfile" component = {BeautifyProfile} />
        <Route exact path = "/projectInfo" component = {ProjectInfoPage} />
        <Route exact path = "/registration" component = {Registration} />
        <Route exact path = "/finishCreate" component = {FinishCreate} />
        <Route exact path = "/createPostModal" component = {CreatePostModal} />
        <Route exact path = "/createPostModal_2" component = {CreatePostModal_2} />
        <Route exact path = "/createPostModal_3" component = {CreatePostModal_3} />
        <Route exact path = "/addActivity" component = {AddActivityModal} />
        <Route exact path = "/applyForm" component = {ApplyForm} />
        <Route exact path = "/profilePage_test" component = {ProfilePage_example} />
        <Route exact path = "/choosingUser" component = {ChoosingUser} />
        <Route exact path = "/login" component = {LoginPage} />
      <Route exact path="/" component = {ChooseType_Ken} />
        {/* <Route path="/" component={ChooseType} /> */}
    </Router>
  );
};

export default MainRoute;
