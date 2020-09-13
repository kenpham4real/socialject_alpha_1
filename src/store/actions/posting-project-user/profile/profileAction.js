// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Constants
import { testing_project_id } from "../../../../constants/testing-keys";

// Export the actions
export const CHANGE_TEXT = "CHANGE_TEXT";

export const fetchProfile_ppu = () => {
  return async (dispatch, getState) => {
    let profileData;
    try {
      // Retrieve the data from Firestore Cloud database
      await firebase_db
        .collection("public-projects")
        .doc(`${testing_project_id}`)
        .get()
        .then((documentSnapshot) => (profileData = documentSnapshot.data()));

      console.log("Profile Data fetched succesfully", profileData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: CHANGE_TEXT,
        payload: profileData,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
