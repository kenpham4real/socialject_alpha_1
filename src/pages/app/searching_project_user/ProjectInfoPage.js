import React, { useEffect, useCallback } from "react";
import {useDispatch, useSelector} from 'react-redux'

// Styles
import "./styles/ProjectInfoPage.css";

// COmponents
import NavigationBar from "../../../components/app/NavigationBar.js";
import ListedItems from "../../../components/app/ProjectInfoPage/ListedItems.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";

// Functions
import * as projectActions from "../../../store/actions/posting-project-user/project/project.js";


const ProjectInfoPage = (props) => {

  // Retrieve the projects state from the reducer
  // state.projectReducer --> From App.js
  // .projects --> From reducer
  const projectData = useSelector(state => state.projectReducer.projects);

  // useDispatch() from react-redux
  const dispatch = useDispatch()

  // A callback to fetch projects
  const _loadProjects = useCallback( async () => {
    try {
      dispatch(projectActions.fetchProject_recruitInfo_ppu())

    } catch (error) {
      console.log('error', error)
    }
  }, [dispatch]) 

  // Fetch projects when PPU enters the page
  useEffect(() => {
    _loadProjects()
    .then(() => console.log('projects loaded successfully'))
  }, [dispatch, _loadProjects])


  // Render the tags of the project
  const _project_tags = () => {
    return(
      <div className="tags">
        <a href="">Explore</a> <span> </span>
        <a href="">Language</a> <span> </span>
        <a href="" className="currentTags">
          Tags
        </a>{" "}
        <span> </span>
      </div>
    )
  }
  
  // Render the info of organization, including name, avatar and the follow button
  const _organization_info = () => {
    return(
      <div className="organizationNameandPicture">
        <img
          className="projectLogo"
          src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
          alt="orgLogo"
        />
        <div className="organizationName">Organization's Name </div>
        <button>Follow</button>
      </div>
    )
  }

  // Render the apply button for the project
  const _project_apply_button = () => {
    return(
      <div className="applyButton">
        <div className="applyNow">Apply Now</div>
        <div className="dueDay">Ends {projectData.deadline}</div>
      </div>
    )
  }

  // Render the avatar of the project
  const _project_avatar = () => {
    return(
      <div>
        <img
          className="projectPicture"
          src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/10514712_1441620719449458_2919014509954445678_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=S_vl00GT_9sAX9yvuwq&_nc_ht=scontent-xsp1-1.xx&oh=a0b2a92958685faec2cc28775a437903&oe=5F69B421"
          alt="projectPicture"
        />
      </div>
    )
  }

  // Render the showing-joined-user-number div
  const _project_joined_users = () => {
    return(
      <div class="joinedUsers">
        <span>100, 000</span> has joined
      </div>
    )
  }
  
  // Render the held-by section of the project
  const _project_held_by_section = () => {
    return(
      <div className="heldByContainer">
        <h1 className="projectHeadings"> Held by</h1>
        <img
          className="projectLogo"
          src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
          alt="orgLogo"
        />
        <span>
          <p className="organizationName">Organization's Name</p>
          <p>
            This paragraph will be the section “About” in the Profile of the
            Organization.
          </p>
        </span>
        <div className="viewAllButton">View all</div>
      </div>
    )
  }

  // Render the benefits section
  const _project_benefit_section = () => {
    return(
      <div className="benefitContainer">
        <h1 className="projectHeadings">Benefit</h1>
        <ListedItems />
        <ListedItems />
        <ListedItems />
      </div>
    )
  }

  // Render the requirements section
  const _project_requirement_section = () => {
    return(
      <div className="requirementsContaner">
        <h1 className="projectHeadings">Requirements</h1>
        <ListedItems />
        <ListedItems />
        <ListedItems />
      </div>
    )
  }

  // Render the about section of the project
  const _project_about_section = () => {
    return(
      <div className="aboutContainer">
        <h1 className="projectHeadings">About</h1>
        <div>{projectData.description}</div>
        <div className="viewAllButton">View all</div>
      </div>
    )
  }

  // Render the progress section of the project
  const _project_progress_section = () => {
    return(
      <div className="progressContainer">
        <div className="progress-container--header">
          <h1 className="projectHeadings">Progress</h1>
          <a className="progress-container-header-addActivityButton" href="/addActivity">Add an activity</a>
        </div>
        <ProjectActivity />
        <ProjectActivity />
        <ProjectActivity />
        <div className="viewAllButton">View all</div>
      </div>
    )
  }

  return (
    <div className="projectInfoPage">
      <div>
        <NavigationBar />
      </div>

      <div className="generalInfoBoard">
        {/* The 'generalInfo' division is divided into 2 smaller division: 'generInfoComponents' and 'projectPicture' */}

        {/*'generalInfo' division*/}
        <div className="generalInfoComponents">
          {_project_tags()}
          <div className="projectName">{projectData.projectName}</div>
          <div className="location">{projectData.projectLocation}</div>
          {_organization_info()}

          {_project_apply_button()}

          {_project_joined_users()}
        </div>

        {/*'projectPicture' division*/}
        {_project_avatar()}
        
      </div>

      <div className="content">
        <div className="leftColumn">
          {_project_held_by_section()}
          {_project_benefit_section()}
          {_project_requirement_section()}
          {/* <div className="teamContainer">
            <h1 className="projectHeadings">Team</h1>
            <ListedItems />
            <ListedItems />
            <ListedItems />
          </div> */}
        </div>
        <div className="rightColumn">
          {_project_about_section()}
          {_project_progress_section()}
        </div>
      </div>
      <div className="footer">
        <CopyrightBar />
      </div>
    </div>
  );
};

export default ProjectInfoPage;
