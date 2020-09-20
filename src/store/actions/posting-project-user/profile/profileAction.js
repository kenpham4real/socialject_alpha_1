// Firebase database
import { firebase_db } from "../../../../firebase-config";

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
