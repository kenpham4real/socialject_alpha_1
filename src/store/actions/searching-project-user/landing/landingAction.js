// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Export the actions.
export const FETCH_LANDING = "FETCH_LANDING";

/******************************** ACTIONS ********************************/
/**
 * @summary A callback function to decide if the page should fetch data or not.
 * @param (Function to fetch, current data, usedispatch, useCallback),
 * @returns a callback function to fetch.
 * @author Long Wibu
 */
//The main function call this to activate the function of fetching data
export function FetchCalling(action, data, dispatch, callback) {
  return callback(() => action(dispatch), [dispatch]);
}

/**
 * @summary A callback function to decide if the page should fetch data or not.
 * @param (useDispatch)
 * @returns {void} this function fetch data then dispatch it onto global store
 * @author Long Wibu
 */
//Fetch the data from the Firebase.
export async function FetchLanding(dispatch) {
  console.log("Fetching is beginning.");
  let projectArray = [],
    count = 0;
  try {
    // Retrieve the data from Firestore Cloud database
    await firebase_db
      .collection("public-projects")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          projectArray[count] = doc.data();
          count++;
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
        });
      });

    console.log("Array fetched: ", projectArray);

    // dispatch helps us store the changed state/ data into the reducers
    dispatch({
      type: FETCH_LANDING,
      payload: projectArray,
    });
  } catch (error) {
    console.log("error", error);
  }
}
