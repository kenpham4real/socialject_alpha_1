// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Constants
import { testing_organization_id, testing_project_id } from "../../../../constants/testing-keys";

// Helper
import { _imageUploadHandler } from "../../../../helper/image/imageHandler";

// Export the actions
export const SET_PROJECT_BASIC_INFO = "SET_PROJECT_BASIC_INFO";
export const SET_PROJECT_RECRUIT_INFO = "SET_PROJECT_RECRUIT_INFO";
export const ADD_PROJECT = "ADD_PROJECT";

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
    console.log('Fetching basic info of projects')
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

      console.log("project data", projectData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: SET_PROJECT_BASIC_INFO,
        projectData: projectData,
      });
    } catch (error) {
      console.log("error", error);
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
    console.log('Fetching recruit info of projects')
    try {
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .collection("recruit-info")
        .doc(`${testing_project_id}`)
        .get()
        .then((doc) => {
          console.log("doc", doc);
          recruitInfo = doc.data();
        });

      console.log("recruit info of project loaded successfully", recruitInfo);

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
      console.log("error", error);
    }
  };
};

/**
 * @summary Push the data of the project the PPU want to create to firestore
 * @param {string} name The name of the project
 * @param {string} description The description of the project
 * @param {string} location The location of of the project
 * @param {string} deadline The deadline of the project
 * @param {String[]} benefits The array string representing the benefits of the project
 * @param {String[]} requirements The array of string representing the requirements when applying the project
 * @param {Object} imageFIle The object file containing the properties of an image chosen from the PPU's local machine
 * @param {string} category The category string of the project
 */
export const _createProject_ppu = (name, description, location, deadline, benefits, requirements, imageFIle, category="General") => {
  return async (dispatch, getState) => {

    const projectImageUrl = _imageUploadHandler(imageFIle);
    const projectRef = firebase_db.collection("public-projects").doc(`${testing_project_id}`);
    const organizationRef = firebase_db.collection('organization').doc(`${testing_organization_id}`)

    try {
      await
      projectRef
      .set({
        projectName: name,
        description: description,
        location: location,
        deadline: deadline,
        projectImage: projectImageUrl,
        category: category
      })
      await
      projectRef
      .collection('recruit-info')
      .doc(`${testing_project_id}`)
      .set({
        benefits: benefits,
        requirements: requirements
      })
      await
      organizationRef
      .collection('projects')
      .doc(`${testing_project_id}`)
      .set({
        projectName: name,
        description: description,
        location: location,
        deadline: deadline,
        projectImage: projectImageUrl,
        category: category
      })

      console.log("Create project successfully");
    } catch (error) {
      console.log("error", error);
    }
  };
};
