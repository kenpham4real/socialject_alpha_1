/* Contributor: Long 22nd September 2020
// Component:
//    In use:
//    Main: Navigation Bar, CopyrightBar, ProjectActivity
  *Function:
    Fetch data: import from "landingAction"
      FetchCalling: to call the fetching action
      FetchProject: according to the orgId, fetch the profile and its correspoding projects.
    Hooks: 
      useCallback, useEffect: To avoid re-fetching, but it still re-fetch anyway.
      useDispatch: to pass into the action so that the action can dispatch data onto global store
      useSelector: select data from global store to use
// *Data needed: 
      1 organization
      publics projects with the same orgId with the org.
      all public-projects. The reducer then will store only the projects that have the same orgId
        yea, I know I know. This algorithm is fucking stupid. I tried following the Firestore docs 
        but it didn't work so this is my only idea.
        I hope you can understand that all the stupidity I made was because I'm stupid, not an error.  

*/

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import "./styles/ProfilePage.css";

// Components
// import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";
import NAVIGATION_BAR_KEN from "../../../components/app/NavigationBar_Ken";

// Constants
// import { testing_project_id } from "../../../constants/testing-keys";

//Action
import * as profileAction from "../../../store/actions/posting-project-user/profile/profileAction";

// const imageURL =
//   "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

// const loremText =
//   "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

//The button to add a project
function AddProjectButton(props) {
  let userId;
  let user = JSON.parse(localStorage.getItem("userData"));
  if (user != null) userId = user.userId;

  if (userId === props.projectOwnerId)
    return (
      <Link to={`/createPostModal`} className="profile-button">
        Add a project
      </Link>
    );
  else return <div style={{ display: "none" }}></div>;
}
//UI component, displaying name, avatar, location, category, university, description, email, phone.
//Oh, also it has a button to navigate to /createPostModal
function OrgName(props) {
  return (
    <div className="profile-name-container">
      <img alt="" className="profile-avatar" src={props.data.orgAvatar} />
      <div className="profile-block-container-small">
        <div className="profile--title">{props.data.orgName}</div>
        <div style={{ color: "gray", fontSize: "18px" }}>
          {props.data.location} / {props.data.category} /{" "}
          {props.data.university}
        </div>
        <div className="profile-description" style={{ fontSize: "15px" }}>
          {props.data.description}
        </div>
        {/*<a
          onClick={props._onNavigateToCreateProjectModal}
          className="profile-button"
        >
          Add a project
        </a>*/}
        <AddProjectButton projectOwnerId={props.projectOwnerId} />
      </div>

      <div className="profile-block-container-smaller">
        <div>Email: {props.data.orgEmail}</div>
        <div>Phone: {props.data.phoneNumber}</div>
      </div>
    </div>
  );
}

//UI displaying the vision and description
function OrgVision(props) {
  return (
    <div className="profile-block-container">
      <p className="profile--title__about">About</p>
      <p className="profile--title__description">{props.data.vision}</p>
      <p>{props.data.description}</p>
    </div>
  );
}

//UI display all projects of this org.
//Each child component can nagivate to /projectInfo with an projectId
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
  console.log("data",data)
  const project_item = data.map((element) => {
    // console.log("Project Id in profile page: ", element);
    if(data.length !== 0)
    return (
      <ProjectActivity
        key={element.orgId}
        project_activity_avatar={element.projectAvatar}
        project_activity_name={element.projectName}
        project_activity_date={element.deadline}
        project_activity_location="Ho Chi Minh"
        project_activity_description={element.description}
        projectId={element.projectId}
        orgId={element.orgId}
        projectOrgId={element.orgId}
      />
    );
  });

  return (
    <div className="profile-block-container">
      <div style={{ marginBottom: "5px" }}>
        <p className="profile--title">Projects</p>
        <div className="profile-button right">
          <AddProjectButton projectOwnerId={props.projectOwnerId} />
        </div>
      </div>
      {/*
      <a
        onClick={props._onNavigateToCreateProjectModal}
        className="profile-button"
      >
        Add a project
      </a>
      */}
      <div className="project-activity-list">
        {project_item}
        {/*<a
            className="project-activity-list--component"
            href="/projectInfo/project_1"
            onClick={() => props.history.push("/projectInfo/project_1")}
          >
            {project_item}
          </a>*/}
      </div>
    </div>
  );
}

//Main component, calling the fetching action and display all UI component.
const ProfilePage = (props) => {
  // const organization = useSelector((state) => state.autoLoginReducer.userData);

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
   * @summary Fetch project data from Data base and select it from global store.
   * @function
   * @param {void}
   * @returns {profileData and projectData} (The data is selected from global store)
   */
  //Get the Id from history.location (old code)
  let profileId = props.history.location.profileId;
  // // console.log("props", props);
  //If there is no props passed from history, get the Id from the latest profile that the user
  //had just accessed.
  if (!profileId) profileId = sessionStorage.getItem("profileId");
  else sessionStorage.setItem("profileId", profileId);
  // // console.log("profile Id received is: ", profileId);

  //This will not fetch if there is no if passed into it.
  //Declare hooks as variables to be more flexible.
  const dispatch = useDispatch();
  //Select data from the global state.
  const projectData = useSelector((state) => state.profileReducer.projectArray);
  const profileData = useSelector((state) => state.profileReducer.profileData);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _fetchCallback = useCallback(
    () => profileAction.FetchProject(dispatch, profileId),
    [dispatch, profileId]
  );

  useEffect(() => {
    _fetchCallback();
  }, [_fetchCallback, profileId]);

  return (
    <div className="profilePage">
      {/*Navigation Bar*/}
      <NAVIGATION_BAR_KEN />

      {/*Org. Name Panel*/}
      <OrgName
        _onNavigateToCreateProjectModal={_onNavigateToCreateProjectModalHandler}
        data={profileData}
        projectOwnerId={profileId}
      />

      {/*Org. Vision*/}
      <OrgVision data={profileData}></OrgVision>

      {/*Org. History*/}
      <OrgHistory
        data={projectData} 
        projectOwnerId={profileId} 
      />
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ProfilePage;
