import { ADMIN } from "../../../constants/user-types";
// Firebase database
import { firebase_db } from "../../../firebase-config";
// Export the actions.
export const FETCH_USER = "FETCH_USER";
export async function FetchUser(dispatch, userId, userData, userType) {
  // let userData = currentData;
  // if (userData.userId == undefined) {
    let fetchedUserData;
    // // console.log("User fetching beginning with the Id: ", userId);
    const collectionRef = userType === ADMIN ? "organization" : "student";
    try {
      // Retrieve the data from Firestore Cloud database
      await firebase_db
        .collection(collectionRef)
        .doc(userId)
        .get()
        .then(function (doc) {
          fetchedUserData = doc.data();
        });
      // // console.log("User Data fetched: ", fetchedUserData);
      // dispatch helps us store the changed state/ data into the reducers
    } catch (error) {
      // // console.log("error", error);
    }
    dispatch({
      type: FETCH_USER,
      payload: fetchedUserData,
    });
  // }
}