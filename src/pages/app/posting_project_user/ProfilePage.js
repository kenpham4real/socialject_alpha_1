
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

import React from "react";

// Styles
import "./styles/ProfilePage.css";

// Components
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

// Constants
import {testing_project_id} from '../../../constants/testing-keys'

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const loremText =
  "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

function OrgName(props) {
  return (
    <div className="profile-name-container">
      <img className="profile-avatar" src={imageURL} />
      <div className="profile-block-container-small">
        <div className="profile--title">Organization's Name</div>
        <div style={{ color: "gray" }}>Location Category</div>
        <div>{loremText}</div>
        <a onClick={props._onNavigateToCreateProjectModal} className="profile-button">Add a project</a>
      </div>
      <a className="profile-block-container-smaller">
        <div>Email: chillisaucery@gmail.com</div>
        <div>Phone: 0912345678</div>
      </a>
    </div>
  );
}

function OrgVision(props) {
  return (
    <div className="profile-block-container">
      <div className="profile--title">Our vision</div>
      <p>{loremText}</p>
    </div>
  );
}

function OrgHistory(props) {

  // This is a testing array of KEYS
  // testing_project_id is a testing key which is imported from constants folder
  const project_ids = [`${testing_project_id}`,2,3,4,5]

  /**
   * @summary Render the list of projects, each of which MUST have a UNIQUE KEY. The keys are extracted from project_activity_ids
   * @param {string[]} project_id
   * @returns JSX Components
   * @author Ken Pham, Long Avenger
   */
  const project_item = project_ids.map((project_id) => {
    return(
      <li>
        <ProjectActivity
          key={project_id}
          project_activity_avatar={null}
          project_activity_name="Name of project/activity"
          project_activity_date={new Date().toDateString()}
          project_activity_location="Ho Chi Minh"
          project_activity_description={loremText}
        />
      </li>
    )
  })

  return (
    <div className="profile-block-container">
      <div className="profile--title">Projects</div>
      <a onClick={props._onNavigateToCreateProjectModal} className="profile-button">Add a project</a>
      <div>
        <ul className="project-activity-list">
          <a 
            className="project-activity-list--component" 
            href="/projectInfo/project_1" 
            onClick={() => props.history.push('/projectInfo/project_1')}
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
    props.history.push('/createPostModal')
  }

  return (
    <div className="profilePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Org. Name Panel*/}
      <OrgName 
        _onNavigateToCreateProjectModal={_onNavigateToCreateProjectModalHandler}
      />

      {/*Org. Vision*/}
      <OrgVision></OrgVision>

      {/*Org. History*/}
      <OrgHistory></OrgHistory>
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ProfilePage;
