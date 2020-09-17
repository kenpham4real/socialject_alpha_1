// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Constants
import { testing_project_id } from "../../../../constants/testing-keys";

// Export the actions
export const SET_PROJECT = "SET_PROJECT";
export const ADD_NAME = "ADD_NAME";
export const ADD_DESCRIPTION = "ADD_DESCRIPTION";
export const ADD_LOCATION = "ADD_LOCATION";
export const ADD_DEADLINE = "ADD_DEADLINE";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_BENEFIT = "ADD_BENEFIT";
export const ADD_REQUIREMENT = "ADD_REQUIREMENT";
export const ADD_AVATAR = "ADD_AVATAR";

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
