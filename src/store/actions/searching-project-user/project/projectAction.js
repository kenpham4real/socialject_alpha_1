/**
 * Contributor:Tien,Long
 *  Day:
 *    (+) Tien 20/9/2020
 *
 *
 *    (+) Long 22 Sept
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
import { firebase_db, analytics } from "../../../../firebase-config";

// Constants
import {
  testing_organization_id,
  testing_submission_form,
} from "../../../../constants/testing-keys";

/******************************** ACTIONS ********************************/
/**
 * @summary Fetch project, project recruit-info, project progress
 * @param {useDispatch, projectId}
 * @returns {void} this function fetch data then dispatch it onto global store
 * @author Long Wibu
 * @howToAccess questions=useSelector(state=>state.projectReducerSPU.projectDetail.questions)
 */

/************Fetch Data*********/
// Export the actions.
export const PROJECT_DETAILS = "PROJECT_DETAILS";

//Fetch the data from the Firebase.
export async function FetchProjectInfo(dispatch, projectId) {
  console.log("Fetching project info is beginning with projectId: ", projectId);
  let count = 0;
  let projectData = {
    projectInfo: {},
    projectDetail: {},
    projectProgress: [],
  };
  try {
    // Retrieve the data from Firestore Cloud database
    //Data Basic Info
    await firebase_db
      .collection("public-projects")
      .doc(projectId)
      .get()
      .then(function (doc) {
        projectData.projectInfo = doc.data();
        console.log("Document data - Info:", projectData.projectInfo);
      });
    //Data Recruit Info
    await firebase_db
      .collection("public-projects")
      .doc(projectId)
      .collection("recruit-info")
      .doc(projectId)
      .get()
      .then(function (doc) {
        projectData.projectDetail = doc.data();
        if (projectData.projectDetail == undefined)
          projectData.projectDetail = {
            benefits: [],
            requirements: [],
            questions: [],
          };
        console.log("Document data - Details:", projectData.projectDetail);
      });
    //Data Progress
    await firebase_db
      .collection("public-projects")
      .doc(projectId)
      .collection("recruit-info")
      .doc(projectId)
      .collection("progress")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          projectData.projectProgress[count] = doc.data();
          count++;
        });
        console.log("Document data - progress:", projectData.projectProgress);
      });

    // dispatch helps us store the changed state/ data into the reducers
    dispatch({
      type: PROJECT_DETAILS,
      payload: projectData,
    });

    analytics.logEvent("page_view", {
      page_location: "ProjectInfoPage",
      page_title: "ProjectInfoPage",
      page_path: `/projectInfoPage/${projectId}`,
      category: `${projectData.projectInfo.category}`,
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
 * @param {string} FormState
 */
export const upDataForm = (FormState) => {
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
        .doc(`${testing_submission_form}`)
        .collection("formSubmission")
        .doc()
        .set(
          {
            FormState,
          },
          { merge: true }
        );
      console.log("Submit form successfully");

      dispatch({
        type: UP_DATA_FORM,
        upDataForm: {
          FormState,
        },
      });
    } catch (error) {
      console.log("Error::", error);
    }
  };
};
