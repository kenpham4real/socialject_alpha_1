/**
 * Contributor:Tien,Long
 *  Day: 
 *    (+) Tien 20/9/2020
 * 
 * 
 *    (+) Long
 * 
 * 
 * Main Fucntion:
 *   Sub-function:
 *      (+) Fetch data from Firebase
 * 
 * 
 *      (+) Push Data of Application Form to Firebase
 */
// Firebase database
import { firebase_db } from "../../../../firebase-config";

// Constants
import { testing_organization_id,  testing_submission_form} from '../../../../constants/testing-keys';


/******************************** ACTIONS ********************************/

                    

                    /************Fetch Data*********/
// Export the actions.
export const FETCH_LANDING = "FETCH_LANDING";


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


                  /************Push Data**************/
//Export the actions.
export const UP_DATA_FORM = "UP_DATA_FORM";


/**
 * @summary Send the profile data the PPU want to create to firestore
 * @param {string} name The name of SPU
 * @param {string} email The email of SPU
 * @param {string} message The message of SPU
 */
export const upDataForm = (
  name,
  email,
  message,
) => {
  /**
   * @summary Asynchronous function calling the database to push the data
   * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
   * @returns {void}
   * @author TrNgTien
   */
  return async (dispatch) => {
    try {
      await firebase_db
        .collection("organization")
        .doc(`${testing_organization_id}`)
        .collection("projects")
        .doc(`${ testing_submission_form}`)
        .collection("formSubmission")
        .doc()
        .set(
          {
            name:name,
            email,
            message,
          },
          { merge: true }
        );
      console.log("Submit form successfully");

      dispatch({
        type: UP_DATA_FORM,
        upDataForm: {
          name:name,
          email,
          message,
        },
      });
    } catch (error) {
      console.log("Error::", error);
    }
  };
};
