// Firebase database
import { firebase_db } from "../../../firebase-config";

// Export the actions.
export const FETCH_USER = "FETCH_USER";

export async function FetchUser(dispatch, userId, currentData) {
  let userData = currentData;
  if (userData.userId == undefined) {
    console.log("User fetching beginning with the Id: ", userId);
    try {
      // Retrieve the data from Firestore Cloud database
      await firebase_db
        .collection("student")
        .doc(userId)
        .get()
        .then(function (doc) {
          userData = doc.data();
        });
      console.log("User Data fetched: ", userData);

      // dispatch helps us store the changed state/ data into the reducers
    } catch (error) {
      console.log("error", error);
    }

    dispatch({
      type: FETCH_USER,
      payload: userData,
    });
  }
}
