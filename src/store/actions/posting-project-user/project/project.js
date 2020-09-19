// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Constants
import { testing_project_id } from "../../../../constants/testing-keys";

// Export the actions.
export const SET_PROJECT = "SET_PROJECT";

/******************************** ACTIONS ********************************/

// Fetch the details of the project (recruit-info)
export const fetchProject_recruitInfo_ppu = () => {
  return async (dispatch, getState) => {
    let projectData;
    try {
      // Retrieve the data from Firestore Cloud database
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .get()
        .then((documentSnapshot) => (projectData = documentSnapshot.data()));

      console.log("project data", projectData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: SET_PROJECT,
        projectData: projectData,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const SET_PROJECT_BASIC_INFO = "SET_PROJECT_BASIC_INFO";
export const SET_PROJECT_RECRUIT_INFO = "SET_PROJECT_RECRUIT_INFO";
export const ADD_PROJECT = "ADD_PROJECT";
export const ADD_ACTIVITY = "ADD_ACTIVITY";

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

export const _createProject_ppu = (projectData, benefits, requirements) => {
  return async (dispatch, getState) => {
    try {
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .set({
          projectData: projectData,
          benefits: benefits,
          requirements: requirements,
        });

      console.log("Create project successfully");
    } catch (error) {
      console.log("error", error);
    }
  };
};
