// Firebase database
import { firebaseApp, firebase_db } from "../../../../firebase-config";

// Constants
import {
  testing_project_id,
  testing_organization_id,
} from "../../../../constants/testing-keys";

// Helper
import { _imageUploadHandler } from "../../../../helper/image/imageHandler";

// Export the actions.
export const PROJECT_FILTER = "FETCH_PROFILE";

/******************************** ACTIONS ********************************/
//The main function call this to activate the function of fetching data
export function FetchCalling(action, data, dispatch, callback, id) {
  console.log("Id when fetching is: ", id);
  if (data == undefined) action(dispatch, id);
  return callback(() => action(dispatch, id), [dispatch]);
}

//Filter the projects from the Firebase.
export async function FetchProject(dispatch, profileId) {
  console.log("Fetching with filter is beginning with the Id: ", profileId);
  let filteredData = {
    projectArray: [],
    profileData: {},
  };
  let count = 0;
  try {
    // Retrieve the data from Firestore Cloud database
    await firebase_db
      .collection("public-projects")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          filteredData.projectArray[count] = doc.data();
          count++;
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
        });
      });
    console.log("Array fetched with filter: ", filteredData.projectArray);

    await firebase_db
      .collection("organization")
      .doc("1lrR6G5aoc0CuAaIrRN4")
      .get()
      .then(function (doc) {
        filteredData.profileData = doc.data();
      });
    console.log("Profile Data is:", filteredData.profileData);

    // dispatch helps us store the changed state/ data into the reducers
    dispatch({
      type: PROJECT_FILTER,
      payload: filteredData,
    });
  } catch (error) {
    console.log("error", error);
  }
}

//Ken's code is below.

// Export the actions
export const SET_ORGANIZATION_PROFILE = "SET_ORGANIZATION_PROFILE";
export const CREATE_PROFILE = "CREATE_PROFILE";

/**
 * @summary Send the profile data the PPU want to create to firestore
 * @param {string} orgId The id of the organization
 * @param {string} orgName The name of the organization
 * @param {string} description The description of the organization
 * @param {string} location The location of the organization
 * @param {string} university The university of the organization
 * @param {string} email The email of the organization
 * @param {string} phoneNumber The phone number of the organization
 * @param {string} facebook The FB link of the organization
 * @param {Object} imageFile The image file object chosen from the local machine of the PPU whe creating profile
 */
export const _createProfile_ppu = (
  orgId,
  orgName,
  description,
  location,
  university,
  email,
  phoneNumber,
  facebook,
  imageFile
) => {
  /**
   * @summary Asynchronous function calling the database to push the data
   * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
   * @param {function} getState => Function used to access the current state of the application
   * @returns {void}
   * @author TrNgTien
   */
  return async (dispatch, getState) => {
    const imageUrl = await _imageUploadHandler(imageFile);
    try {
      await firebase_db
        .collection("organization")
        .doc(`${testing_organization_id}`)
        .set(
          {
            orgId: orgId,
            orgName: orgName,
            description: description,
            location: location,
            university: university,
            email: email,
            phoneNumber: phoneNumber,
            facebook: facebook,
            imageFile: imageUrl,
          },
          { merge: true }
        );
      console.log("Create profile successfully");

      dispatch({
        type: CREATE_PROFILE,
        finishCreate: {
          orgId: orgId,
          orgName: orgName,
          description: description,
          location: location,
          university: university,
          email: email,
          phoneNumber: phoneNumber,
          facebook: facebook,
          imageFile: imageFile,
        },
      });
    } catch (error) {
      console.log("Error::", error);
    }
  };
};

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
      const organizationRef = firebase_db
        .collection("organization")
        .doc(`${testing_organization_id}`);
      await organizationRef
        .get()
        .then((documentSnapshot) => (profileData = documentSnapshot.data()))
        .then(async () => {
          await organizationRef
            .collection("projects")
            .get()
            .then((querySnapshot) => {
              console.log("bitch");
              querySnapshot.forEach((doc) => {
                projects.push(doc.data());
              });
            });
        });

      console.log("Profile Data fetched succesfully bitch", profileData);

      // dispatch helps us store the changed state/ data into the reducers
      dispatch({
        type: SET_ORGANIZATION_PROFILE,
        profileData: profileData,
        profile_projectData: projects,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};