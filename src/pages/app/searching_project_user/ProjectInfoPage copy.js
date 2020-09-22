/**
 * Contributors: Đạt, Ken
 * Currently be modified by: Long
 * Main Component:
 * ProjectInfoPage{
 *  _loadProjectst() => Fetch the projects from Firestore
 *  _project_tags() => Render the tag of the project
 *  _organizationInfo() => Render the info of organization, including name, avatar and the follow button
 *  _project_apply_button() => Render the apply button for the project
 *  _
 * }
 */

import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import "./styles/ProjectInfoPage.css";

// COmponents
import NavigationBar from "../../../components/app/NavigationBar.js";
import ListedItems from "../../../components/app/ProjectInfoPage/ListedItems.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";

// Functions
import * as projectActions from "../../../store/actions/posting-project-user/project/project.js";
import * as activityActions from "../../../store/actions/posting-project-user/activity/activity";

const ProjectInfoPage = (props) => {
  console.log(
    "Id pass from the previous page: ",
    props.history.location.projectId
  );

  // useDispatch() from react-redux
  const dispatch = useDispatch();
  const [isFetchedRecruitInfo, setIsFetchedRecruitInfo] = useState(false);
  const [isFetchedActivities, setIsFetchedActivities] = useState(false);

  // Retrieve the projects state from the reducer
  // state.projectReducer --> From App.js
  // .projects --> From reducer
  // Global state: projects
  const projects_recruit_info = useSelector(
    (state) => state.projectReducer.projects_recruit_info
  );
  const activities = useSelector((state) => state.activityReducer.activities);

  /**
   * @summary A callback to fetch projects
   * @param {void}
   * @returns {function} @callback
   * @author Ken Pham
   */
  const _loadProjects = useCallback(async () => {
    try {
      dispatch(projectActions._fetchProject_recruit_info_ppu());
    } catch (error) {
      console.log("error", error);
    }
  }, [dispatch]);

  const _loadProjectActivity = useCallback(async () => {
    try {
      dispatch(activityActions._fetchProjectActivity_ppu());
    } catch (error) {
      console.log("error", error);
    }
  }, [dispatch]);

  useEffect(() => {
    _loadProjects()
      .then(() => {
        setIsFetchedRecruitInfo(true);
        console.log("activities loaded successfully");
      })
      .then(() => _loadProjectActivity())
      .then(() => {
        setIsFetchedActivities(true);
        console.log("activities loaded successfully");
      });
  }, [dispatch, _loadProjectActivity, _loadProjects]);

  console.log("fetched projects", projects_recruit_info);

  /********************************* Small UI components *********************************/
  /**
   * @summary Render the tags of the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_tags = () => {
    return (
      <div className="tags">
        <a href="">Explore</a> <span> </span>
        <a href="">Language</a> <span> </span>
        <a href="" className="currentTags">
          Tags
        </a>{" "}
        <span> </span>
      </div>
    );
  };

  /**
   * @summary Render the info of organization, including name, avatar and the follow button
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _organization_info = () => {
    return (
      <div className="organizationNameandPicture">
        <img
          className="projectLogo"
          src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
          alt="orgLogo"
        />
        <div className="organizationName">Organization's Name </div>
        <button>Follow</button>
      </div>
    );
  };

  /**
   * @summary Render the apply button for the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_apply_button = () => {
    return (
      <div className="applyButton">
        <div className="applyNow">
          <Link
            className="Link"
            to={{
              pathname: "/applyform",
            }}
          >
            Apply Now{" "}
          </Link>
        </div>
        <div className="dueDay">Ends some day</div>
      </div>
    );
  };

  /**
   * @summary Render the avatar of the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_avatar = () => {
    return (
      <div>
        <img
          className="projectPicture"
          src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/10514712_1441620719449458_2919014509954445678_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=S_vl00GT_9sAX9yvuwq&_nc_ht=scontent-xsp1-1.xx&oh=a0b2a92958685faec2cc28775a437903&oe=5F69B421"
          alt="projectPicture"
        />
      </div>
    );
  };

  /**
   * @summary Render the showing-joined-user-number div
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_joined_users = () => {
    return (
      <div className="joinedUsers">
        <span>100, 000</span> has joined
      </div>
    );
  };

  /**
   * @summary Render the held-by section of the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_held_by_section = () => {
    return (
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
    );
  };

  /**
   * @summary Render the benefits section
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_benefit_section = () => {
    return (
      <div className="benefitContainer">
        <h1 className="projectHeadings">Benefit</h1>
        <ul>
          {isFetchedRecruitInfo &&
            projects_recruit_info.benefits.map((benefit) => (
              <ListedItems title={benefit} />
            ))}
        </ul>
      </div>
      //Somthing is wrong in this section, detail:"benefits". That makes the page broken
    );
  };

  /**
   * @summary Render the requirements section
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_requirement_section = () => {
    return (
      <div className="requirementContaner">
        <h1 className="projectHeadings">Requirements</h1>
        {isFetchedRecruitInfo &&
          projects_recruit_info.requirements.map((requirement) => (
            <ListedItems title={requirement} />
          ))}
      </div>
    );
  };

  /**
   * @summary Render the about section of the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_about_section = () => {
    return (
      <div className="aboutContainer">
        <h1 className="projectHeadings">About</h1>
        <div>Best project ever</div>
        <div className="viewAllButton">View all</div>
      </div>
    );
  };

  /**
   * @summary Render the activities
   * @param {void}
   * @returns JSX
   * @author Ken Pham
   */
  const _project_activity_item = activities.map((activity) => {
    return (
      <ProjectActivity
        key={activity.activityId}
        project_activity_avatar={null}
        project_activity_name={activity.activityName}
        project_activity_date={activity.activityDate}
        project_activity_location={activity.activityLocation}
        project_activity_description={activity.activityDescription}
      />
    );
  });

  /**
   * @summary Render the progress section of the project
   * @param {void}
   * @returns JSX Components
   * @author Ken Pham, Dat Uchiha
   */
  const _project_progress_section = () => {
    return (
      <div className="progressContainer">
        <div className="progress-container--header">
          <h1 className="projectHeadings">Progress</h1>
          <a
            className="progress-container-header-addActivityButton"
            href="/addActivity"
          >
            Add an activity
          </a>
        </div>
        <ul className="progress-container-activity">
          <a>{_project_activity_item}</a>
        </ul>
        <div className="viewAllButton">View all</div>
      </div>
    );
  };

  /********************************* MAIN Component: ProjectInfoPage *********************************/
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
          <div className="projectName">SocialJect_1</div>
          <div className="location">Home</div>
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