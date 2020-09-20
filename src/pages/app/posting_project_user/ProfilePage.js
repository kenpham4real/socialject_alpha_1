// Contributor: Long 19th August 2020
// Component:
//    In use:
//    Main: ChooseType (the page)
//    *Navigation Bar: Header, display user menu and socialject menu
//    *CopyrightBar: Footer, display text, content is copyright
//    *ProjectActivity
// *Data needed: (currently provided in this file already)
//    texts
//

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "./styles/ProfilePage.css";

// Components
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

// Constants
import { testing_project_id } from "../../../constants/testing-keys";

//Action
import * as profileAction from "../../../store/actions/posting-project-user/profile/profileAction";

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const loremText =
  "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

function OrgName(props) {
  return (
    <div className="profile-name-container">
      <img className="profile-avatar" src={props.data.orgAvatar} />
      <div className="profile-block-container-small">
        <div className="profile--title">{props.data.orgName}</div>
        <div style={{ color: "gray" }}>
          {props.data.location} / {props.data.category} /{" "}
          {props.data.university}
        </div>
        <div>{props.data.description}</div>
        <a
          onClick={props._onNavigateToCreateProjectModal}
          className="profile-button"
        >
          Add a project
        </a>
      </div>
      <a className="profile-block-container-smaller">
        <div>Email: {props.data.email}</div>
        <div>Phone: {props.data.phoneNumber}</div>
      </a>
    </div>
  );
}

function OrgVision(props) {
  return (
    <div className="profile-block-container">
      <div className="profile--title">{props.data.vision}</div>
      <p>{props.data.description}</p>
    </div>
  );
}

function OrgHistory(props) {
  const data = props.data;
  // This is a testing array of KEYS
  // testing_project_id is a testing key which is imported from constants folder
  /**
   * @summary Render the list of projects, each of which MUST have a UNIQUE KEY. The keys are extracted from project_activity_ids
   * @param {string[]} project_id
   * @returns JSX Components
   * @author Ken Pham, Long Avenger
   */
  const project_item = data.map((element) => {
    return (
      <li>
        <ProjectActivity
          key={element.orgId}
          project_activity_avatar={element.projectAvatar}
          project_activity_name={element.projectName}
          project_activity_date={element.deadline}
          project_activity_location="Ho Chi Minh"
          project_activity_description={element.description}
        />
      </li>
    );
  });

  return (
    <div className="profile-block-container">
      <div className="profile--title">Projects</div>
      {/*
      <a
        onClick={props._onNavigateToCreateProjectModal}
        className="profile-button"
      >
        Add a project
      </a>
      */}
      <div>
        <ul className="project-activity-list">
          <a
            className="project-activity-list--component"
            href="/projectInfo/project_1"
            onClick={() => props.history.push("/projectInfo/project_1")}
          >
            {project_item}
          </a>
        </ul>
      </div>
    </div>
  );
}

const ProfilePage = (props) => {
  /**
   * @summary Navigate to the create project modal
   * @function
   * @param {void}
   * @returns {void}
   */
  const _onNavigateToCreateProjectModalHandler = () => {
    props.history.push("/createPostModal");
  };

  /**
   * @summary Fetch project data from Data base
   * @function
   * @param {void}
   * @returns {void}
   */
  //Declare hooks as variables to be more flexible.
  const dispatch = useDispatch();
  const callback = useCallback;
  //Select data from the global state.
  let projectData = [];
  let profileData = {};
  const profileId = "1lrR6G5aoc0CuAaIrRN4";
  const selectProject = useSelector(
    (state) => state.profileReducer.projectArray
  );
  const selectProfile = useSelector(
    (state) => state.profileReducer.profileData
  );
  if (selectProject != undefined) projectData = selectProject;
  if (selectProfile != undefined) profileData = selectProfile;
  //Use 2 hooks useEffect and useCallback to prevent re-render, but it still re-render anyway.
  const fetchCallback = profileAction.FetchCalling(
    profileAction.FetchProject,
    selectProject,
    dispatch,
    callback,
    profileId
  );
  useEffect(() => {
    fetchCallback();
  }, [dispatch]);

  //For testing purpose.
  console.log("Selected Data:", selectProject);

  return (
    <div className="profilePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Org. Name Panel*/}
      <OrgName
        _onNavigateToCreateProjectModal={_onNavigateToCreateProjectModalHandler}
        data={profileData}
      />

      {/*Org. Vision*/}
      <OrgVision data={profileData}></OrgVision>

      {/*Org. History*/}
      <OrgHistory data={projectData}></OrgHistory>
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ProfilePage;
