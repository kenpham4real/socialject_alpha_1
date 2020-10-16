/**
 * Contributors: Đạt, Ken
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
import Modal from "react-modal";
// Styles
import "./styles/ProjectInfoPage.css";

// COmponents
// import NavigationBar from "../../../components/app/NavigationBar.js";
import ListedItems from "../../../components/app/ProjectInfoPage/ListedItems.js";
import ProjectActivity from "../../../components/app/ProjectInfoPage/ProjectActivity.js";
import CopyrightBar from "../../../components/app/CopyrightBar.js";
import FormSubmission from "../../../components/app/ProjectInfoPage/FormSubmission";
import IndividualForm from "../../../components/app/ProjectInfoPage/IndividualForm";

// Functions
import * as projectActions from "../../../store/actions/searching-project-user/project/projectAction";
// import * as activityActions from "../../../store/actions/posting-project-user/activity/activity";
// import {_getFormSubmission} from '../../../store/actions/posting-project-user/project/project'
import NAVIGATION_BAR_KEN from "../../../components/app/NavigationBar_Ken";

const ProjectInfoPage = (props) => {
  // // console.log("PROJECT_INFO_PAGE");
  // console.log('props in ProjectInfoPage', props)
  const projectId = props.history.location.projectId;
  const orgId = props.history.location.orgId;
  const projectOrgId = props.history.location.projectOrgId;

  // console.log('projectOrgId in ProjectInfoPage', projectOrgId)

  const dispatch = useDispatch();
  const [isFetchedRecruitInfo, setIsFetchedRecruitInfo] = useState(false);
  const [isViewApplicantModal, setIsViewApplicantModal] = useState(false);
  const [applicant, setApplicant] = useState({});

  const projectsData = useSelector(
    (state) => state.projectReducerSPU.projectsData
  );

  const user = JSON.parse(localStorage.getItem("userData"));
  const userId = user !== null ? user.userId : "";

  const activities = projectsData.projectProgress;
  /**
   * @summary A callback to fetch projects
   * @param {void}
   * @returns {function} @callback
   * @author Ken Pham
   */
  const _loadProjects = useCallback(async () => {
    try {
      dispatch(projectActions._getProjectInfo(projectOrgId, orgId, projectId));
    } catch (error) {
      // // console.log("error", error);
    }
  }, [dispatch, orgId, projectId]);

  useEffect(() => {
    _loadProjects().then(() => {
      setIsFetchedRecruitInfo(true);
    });
  }, [dispatch, _loadProjects, isFetchedRecruitInfo]);

  // console.log("fetched projects", projectsData);

  const _onViewStudentAnswer = (applicant) => {
    setIsViewApplicantModal(true)
    setApplicant(applicant);
  };

  /********************************* Small UI components *********************************/

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
          src={projectsData.orgInfo.orgAvatar}
          alt="orgLogo"
          onClick={() =>
            props.history.push({
              pathname: userId ? "/profile" : "",
              profileId: projectsData.orgInfo.orgId,
            })
          }
        />

        <div className="organizationName">
          {projectsData.orgInfo.orgName}{" "}
        </div>
        {/* <button>Follow</button>    //Follow Functionality has not been developed */}
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
    // // console.log("User Id in the button is: ", userId);
    // // console.log("Project owner's Id: ", projectsData.projectInfo.orgId);
    if (userId !== projectsData.projectInfo.orgId)
      return (
        <div
          className="applyButton"
          onClick={() =>
            props.history.push({
              pathname: "/applyform",
              projectId: projectId,
            })
          }
        >
          <div className="applyNow">
            <Link
              className="Link"
              to={{
                pathname: "/applyform",
                projectId,
              }}
            >
              Apply Now{" "}
            </Link>
          </div>
        </div>
      );
    else return <div></div>;
  };

  const _project_due_day = () => {
    return (
      <div className="dueDay">
        <span>{projectsData.projectInfo.deadline}</span>
        <br />
        <span className="deadlineTittle">Deadline</span>
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
      <div className="projectPictureContainer">
        <img
          className="projectPicture"
          src={projectsData.projectInfo.projectAvatar}
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
        <span>100</span>
        <br /> has joined
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
          src={projectsData.orgInfo.orgAvatar}
          alt="orgLogo"
          onClick={() =>
            props.history.push({
              pathname: userId ? "/profile" : "",
              profileId: projectsData.projectInfo.orgId,
            })
          }
        />
        <span>
          <p className="organizationName">
            {projectsData.orgInfo.orgName}
          </p>
          <p>{projectsData.orgInfo.description}</p>
        </span>
        {/* <div className="viewAllButton">View all</div> */}
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
            isFetchedRecruitInfo &&
            projectsData.projectDetail.benefits.map((benefit) => (
              <li>
                <ListedItems title={benefit} />
              </li>
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
        <ul>
          {isFetchedRecruitInfo &&
            projectsData.projectDetail.requirements.map((requirement) => (
              <li>
                <ListedItems title={requirement} />
              </li>
            ))}
        </ul>
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
        <div>{projectsData.projectInfo.description}</div>
        {/* <div className="viewAllButton">View all</div> */}
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
        project_activity_avatar={activity.activityImage}
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
    let ifDisplay = "flex";
    if (userId !== projectsData.orgInfo.orgId) ifDisplay = "none";
    const AddActivityButton = () => {
      return (
        <div
          className="progress-container-header-addActivityButton"
          onClick={() =>
            props.history.push("/addActivity", {
              projectId: projectId,
            })
          }
          style={{ display: ifDisplay }}
        >
          Add an activity
        </div>
      );
    };
    return (
      <div className="progressContainer">
        <div className="progress-container--header">
          <h1 className="projectHeadings">Progress</h1>
          {/*
            <div
            className="progress-container-header-addActivityButton"
            onClick={() =>
              props.history.push("/addActivity", {
                projectId: projectId,
              })
            }
          >
            Add an activity
          </div>
          */}
          <AddActivityButton />
        </div>
        <ul className="progress-container-activity">
          <p>{_project_activity_item}</p>
        </ul>
        {/* <div className="viewAllButton">View all</div> */}
      </div>
    );
  };

  // const _handle_modal_open = (StudentId) => {
  //   setIsModalOpen(true);
  //   const { name, email, avatar, answers } = StudentId;
  //   setFormStudentId((prevState) => ({
  //     ...prevState,
  //     name: name,
  //     email: email,
  //     avatar: avatar,
  //     answers: answers,
  //   }));
  //   // console.log("Student ID", StudentId);
  //   // console.log("Modal Student Id", formStudentId);
  // };
  // // console.log("Modal Student Id", formStudentId);
  // const _close_modal_handler = () => setIsModalOpen(false);
  // /********************************* MAIN Component: ProjectInfoPage *********************************/
  // const imageURL =
  //   "https://i.pinimg.com/originals/39/46/55/39465510117c36c2023b2d72cdcf05b3.jpg";
  // const exampleFormSubmissionData = [
  //   //Example data for Form Submission
  //   {
  //     name: "Ken Pham",

  //     email: "kanekiken@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: " KEN Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Long Wibu",
  //     email: "longthewibulord@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: " LONGGGGGGGG WWIBUUUUU Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Long Artist",
  //     email: "chillisaucery@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: "LONGGGGG ARTISTTTTTTT Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Dat Uchiha",

  //     email: "uchihasasudat@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: "DAT DEP TRAI Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Tien kun",

  //     email: "tranngoctien@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: "TIEN KUN   Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Imposter",

  //     email: "amongus@gmail.com",
  //     avatar: imageURL,
  //     answers: [
  //       {
  //         id: "1",
  //         question: "Your favorite pokemon?",
  //         answer: "IMPOSTER     Charizard",
  //       },
  //       { id: "2", question: "Your favorite 6 digit code?", answer: "177013" },
  //       {
  //         id: "3",
  //         question: "Your favorite type of girl?",
  //       },
  //     ],
  //   },
  // ];

  /********************************* MAIN Component: ProjectInfoPage *********************************/
  return (
    <div className="projectInfoPage">
      <div>
        {/* <NavigationBar /> */}
        <NAVIGATION_BAR_KEN/>
      </div>

      <div className="generalInfoBoard">
        {/* The 'generalInfo' division is divided into 2 smaller division: 'generInfoComponents' and 'projectPicture' */}

        {/*'generalInfo' division*/}
        <div className="generalInfoComponents">
          {/* {_project_tags()} */}
          <div className="projectName">
            {projectsData.projectInfo.projectName}
          </div>
          <div className="location">{projectsData.projectInfo.location}</div>
          {_organization_info()}

          {_project_joined_users()}
          {_project_due_day()}

          {_project_apply_button()}
        </div>

        {/*'projectPicture' division*/}
        {_project_avatar()}
      </div>

      <div className="projectInfoContent">
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
          <FormSubmission
            userId={userId}
            projectOwnerId={projectsData.orgInfo.orgId}
            // formData={exampleFormSubmissionData}
            // onModalOpening={(props) => _handle_modal_open(props)}
            isFetchedRecruitInfo={isFetchedRecruitInfo}
            formSubmissions={projectsData.formSubmission}
            _onViewStudentAnswer={(submission) => _onViewStudentAnswer(submission)}
            // _onViewApplicant={() => // console.log('yayy')}
          />
          <Modal isOpen={isViewApplicantModal}>
            <IndividualForm
              userId={userId}
              projectOwnerId={projectsData.orgInfo.orgId}
              isFetchedRecruitInfo={isFetchedRecruitInfo}
              studentSubmission={applicant}
              _onCloseApplicantView={() => setIsViewApplicantModal(false)}
            />
          </Modal>
        </div>
      </div>

      <CopyrightBar />
    </div>
  );
};

export default ProjectInfoPage;
