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

import React, { useCallback, useEffect, useState } from "react";

// Styles
import "./styles/ProfilePage.css";

// Components
import NavigationBar from "../../../components/app/NavigationBar.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity";

// Constants
import {testing_project_id} from '../../../constants/testing-keys'
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../../../store/actions/posting-project-user/profile/profileAction";

const imageURL =
  "https://c4.wallpaperflare.com/wallpaper/963/733/213/anime-girls-ghost-blade-wlop-wallpaper-preview.jpg";

const loremText =
  "Khi Beyond Birthday lấy mạng nạn nhân thứ ba của mình, hắn định làm một thử nghiệm—để xem có cách nào làm một con người chết vì xuất huyết trong mà không cần phải hủy hoại một bộ phận cơ thể nào hay không. Cụ thể, hắn cho nạn nhân chìm vào trạng thái vô thức bằng thuốc mê; ...";

function OrgName(props) {
  return (
    <div className="profile-name-container">
      <img className="profile-avatar" src={imageURL} />
      <a className="profile-block-container-small">
        <div className="profile--title">{props.orgName}</div>
        <div style={{ color: "gray" }}>{props.orgCategory}</div>
        <div>{loremText}</div>
        <div className="profile-button">Add a project</div>
      </a>
      <a className="profile-block-container-smaller">
        <div>{props.orgEmail}</div>
        <div>{props.orgPhoneNumber}</div>
      </a>
    </div>
  );
}

function OrgVision(props) {
  return (
    <div className="profile-block-container">
      <div className="profile--title">{props.orgVision}</div>
      <p>{loremText}</p>
    </div>
  );
}

function OrgHistory(props) {

    /**
     * @summary Render the list of projects, each of which MUST have a UNIQUE KEY. The keys are extracted from project_activity_ids
     * @param {string[]} project_id
     * @returns JSX Components
     * @author Ken Pham, Long Avenger
     */
    const projects = typeof(props.projects) == 'object' ? props.projects : project_ids
    const project_item = projects.map((project) => {
        return(
        <li>
            <ProjectActivity
            key={project.projectId}
            project_activity_avatar={null}
            project_activity_name={project.projectName}
            project_activity_date={project.deadline}
            project_activity_location={project.location}
            project_activity_description={project.description}
            />
        </li>
        )
    })

    return (
        <div className="profile-block-container">
        <div className="profile--title">Projects</div>
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

const ProfilePage_example = (props) => {

    const [isFinishLoadingProfile, setIsFinishLoadingProfile] = useState(false);

    const dispatch = useDispatch();
    const organization = useSelector(state => state.profileReducer.profileData)
    const organization_projects = useSelector(state => state.profileReducer.projectData)

    const _loadProfile = useCallback(async () => {
        try {
            dispatch(profileActions._fetchProfile_ppu())   
            
        } catch (error) {
            console.log('error')
        }
    }, [dispatch])

    useEffect(() => {
        _loadProfile()
        .then(() => console.log('Profile loaded successfully'))
        .then(() => setIsFinishLoadingProfile(true))
    }, [dispatch, _loadProfile])
    

    console.log('organization', organization)
    console.log('organization projects', organization_projects)

  return (
    <div className="profilePage">
      {/*Navigation Bar*/}
      <NavigationBar></NavigationBar>

      {/*Org. Name Panel*/}
      <OrgName
        orgName={organization.orgName}
        orgCategory={organization.category}
        orgVision={organization.description}
        orgEmail={organization.email}
        orgPhoneNumber={organization.phoneNumber}
        
      />

      {/*Org. Vision*/}
      <OrgVision></OrgVision>

      {/*Org. History*/}
      {isFinishLoadingProfile && <OrgHistory
        projects={organization_projects}
      />}
      {/*Copyright*/}
      <CopyrightBar></CopyrightBar>

      {/* End of code */}
    </div>
  );
};

export default ProfilePage_example;