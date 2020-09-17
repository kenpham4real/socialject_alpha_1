// Firebase database
import { firebaseApp, firebase_db } from "../../../../firebase-config";

// Constants
import { testing_project_id, testing_organization_id } from "../../../../constants/testing-keys";

// Export the actions
export const SET_ORGANIZATION_PROFILE = "SET_ORGANIZATION_PROFILE";

/**
 * @summary Fetch the information of the organization
 * @function
 * @param {void}
 * @author Ken Pham, Long Luu
 */
export const _fetchProfile_ppu = () => {
  
  return async (dispatch, getState) => {
    let profileData;
    let projects = [];
    try {
      // Retrieve the data from Firestore Cloud database
      const organizationRef = firebase_db.collection("organization").doc(`${testing_organization_id}`)
      await organizationRef
      .get()
      .then((documentSnapshot) => (profileData = documentSnapshot.data()))
      .then(async() => {
        await organizationRef
        .collection('projects')
        .get()
        .then(
          querySnapshot => {
            console.log('bitch')
            querySnapshot.forEach(
              (doc) => {
                  projects.push(doc.data())
              }
            ) 
          }
        )
      })

      console.log("Profile Data fetched succesfully bitch", profileData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: SET_ORGANIZATION_PROFILE,
        profileData: profileData,
        profile_projectData: projects
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
