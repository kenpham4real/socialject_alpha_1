// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Export the actions.
export const FETCH_LANDING = "FETCH_LANDING";

/******************************** ACTIONS ********************************/
//The main function call this to activate the function of fetching data
export function FetchCalling(action, data, dispatch, callback) {
  if (data == undefined) action(dispatch);
  return callback(() => action(dispatch), [dispatch]);
}

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
