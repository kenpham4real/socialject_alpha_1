// Firebase database
// import firebase from "firebase";
import { firebase_db } from "../../../../firebase-config";

// Constants
import {
  // testing_organization_id,
  testing_project_id,
} from "../../../../constants/testing-keys";

// Helper
import { _imageUploadHandler } from "../../../../helper/image/imageHandler";

// Export the actions
export const SET_PROJECT = "SET_PROJECT";
export const SET_PROJECT_BASIC_INFO = "SET_PROJECT_BASIC_INFO";
export const SET_PROJECT_RECRUIT_INFO = "SET_PROJECT_RECRUIT_INFO";
export const GET_FORM_SUBMISSION = "GET_FORM_SUBMISSION";

/******************************** ACTIONS ********************************/

/**
 * @summary Fetch the basic info of the project (recruit-info)
 * @param {void}
 * @returns @async @function
 * @author Ken Pham
 */
export const _fetchProject_basic_info_ppu = () => {
  /**
   * @summary Asynchronous function calling the database to fetch the data
   * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
   * @param {function} getState => Function used to access the current state of the application
   * @author Ken Pham
   */
  return async (dispatch, getState) => {
    let projectData;
    // console.log("Fetching basic info of projects");
    try {
      // Retrieve the data from Firestore Cloud database
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .get()
        .then((documentSnapshot) => {
          // Check if the document exist
          projectData = documentSnapshot.exists
            ? documentSnapshot.data()
            : null;
        });

      // console.log("project data", projectData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: SET_PROJECT_BASIC_INFO,
        projectData: projectData,
      });
    } catch (error) {
      // console.log("error", error);
    }
  };
};

/**
 * @summary Fetch the detailed (benefits, requirements) info of the project
 * @param {void}
 * @returns {void} @async @function
 * @author Ken Pham
 */
export const _fetchProject_recruit_info_ppu = () => {
  /**
   * @summary Fetch the detailed (benefits, requirements) info of the project then dispatch the changes to reducer
   * @param dispatch
   * @param getState
   * @returns {void}
   * @author Ken Pham
   */
  return async (dispatch, getState) => {
    let recruitInfo;
    // console.log("Fetching recruit info of projects");
    try {
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .collection("recruit-info")
        .doc(`${testing_project_id}`)
        .get()
        .then((doc) => {
          // console.log("doc", doc);
          recruitInfo = doc.data();
        });

      // console.log("recruit info of project loaded successfully", recruitInfo);

      /**
       * @description This is called Destructuring in JS
       * @tutorial {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
       */
      const { benefits, requirements } = recruitInfo;

      dispatch({
        type: SET_PROJECT_RECRUIT_INFO,
        benefits: benefits,
        requirements: requirements,
      });
    } catch (error) {
      // console.log("error", error);
    }
  };
};

/**
 * @summary Push the data of the project the PPU want to create to firestore
 * @param {string} name The name of the project
 * @param {string} description The description of the project
 * @param {string} location The location of of the project
 * @param {string} deadline The deadline of the project
 * @param {string[]} benefits The array string representing the benefits of the project
 * @param {string[]} requirements The array of string representing the requirements when applying the project
 * @param {object} imageFIle The object file containing the properties of an image chosen from the PPU's local machine
 * @param {string} category The category string of the project
 */
export const _createProject_ppu = (
  orgId,
  projectId,
  name = null,
  description = "None",
  location = "None",
  deadline = "None",
  benefits = null,
  requirements = null,
  imageFile = null,
  questions = null,
  category = "General"
) => {
  //Handle data error
  if (orgId === "") orgId = JSON.parse(localStorage.getItem("userData")).userId;
  if (!deadline) deadline = "";

  //For debugging purpose
  // const project = {
  //   orgId: orgId,
  //   projectId: projectId,
  //   name: name,
  //   description: description,
  //   location: location,
  //   deadline: deadline,
  //   benefits: benefits,
  //   requirements: requirements,
  //   imageFIle: imageFile,
  //   questions: questions,
  //   category: category,
  // };
  // console.log("Project to push: ", project);

  //Fire store management
  return async (dispatch, getState) => {

    const organization = getState().autoLoginReducer.userData;

    const projectImageUrl = await _imageUploadHandler(imageFile);
    console.log("projectImageUrl", projectImageUrl);
    const projectRef = firebase_db.collection("public-projects").doc(`${projectId}`);
    const organizationRef = firebase_db.collection("organization").doc(`${orgId}`);
    console.log("questions are", questions);
    try {
      await projectRef
        .set({
          orgId: orgId,
          orgName: organization.orgName,
          projectName: name,
          projectId: projectId,
          description: description,
          location: location,
          deadline: deadline,
          projectAvatar: projectImageUrl,
          orgAvatar: organization.orgAvatar,
          category: category,
        });
      await projectRef
        .collection("recruit-info")
        .doc(`${projectId}`)
        .set({
          benefits: benefits,
          requirements: requirements,
        });
      await organizationRef.collection("projects").doc(`${projectId}`).set({
        projectName: name,
        description: description,
        location: location,
        deadline: deadline,
        projectImage: projectImageUrl,
        category: category,
      });

      await projectRef
        .collection("recruit-info")
        .doc(`${projectId}`)
        /*.update({
          formQuestions: firebase.firestore.FieldValue.arrayUnion(questions),
        });*/
        .set({ formQuestions: questions });

      // console.log("Create project successfully");
    } catch (error) {
      // console.log("error", error);
    }
  };
};

export const _getFormSubmission = (orgId, projectId) => {
  return async (dispatch, getState) => {
    // console.log("GETTING FORM SUBMISSION");
    // console.log("OrgId: ", orgId, " projectId", projectId);

    let formSubmission = [];

    try {
      await firebase_db
        .collection("organization")
        .doc(`${orgId}`)
        .collection("projects")
        .doc(`${projectId}`)
        .collection("formSubmission")
        .get()
        .then((query) => {
          console.log("query.docs(): ", query.docs);
          // let tmpDoc;

          query.forEach((doc) => {
            // console.log("doc of form submission", doc);
            formSubmission.push(doc.data());
            // tmpDoc = doc;
          });
          // console.log("added form submission data with doc", tmpDoc);
        });

      // console.log("formSubmission", formSubmission);

      dispatch({
        type: GET_FORM_SUBMISSION,
        formSubmission: formSubmission,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
