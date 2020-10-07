// /**
//  * Contributor:Tien,Long
//  *  Day:
//  *    (+) Tien 20/9/2020
//  *
//  *
//  *    (+) Long 22 Sept
//  * 
//  * 	  (+) Ken Oct 3rd
//  *
//  * Main Fucntion:
//  *   Sub-function:
//  *      (+) Fetch data from Firebase
//  *
//  *
//  *      (+) Push Data of Application Form to Firebase
//  */
// // Firebase database
// import { firebase_db, analytics } from "../../../../firebase-config";

// // Constants
// import {
//   testing_organization_id,
//   testing_submission_form,
// } from "../../../../constants/testing-keys";

// /******************************** ACTIONS ********************************/
// /**
//  * @summary Fetch project, project recruit-info, project progress
//  * @param {useDispatch, projectId}
//  * @returns {void} this function fetch data then dispatch it onto global store
//  * @author Long Wibu
//  * @howToAccess questions=useSelector(state=>state.projectReducerSPU.projectDetail.questions)
//  */

// /************Fetch Data*********/
// // Export the actions.
// export const SET_PROJECT_RECRUIT_INFO = "SET_PROJECT_RECRUIT_INFO";

// /**
//  * @summary Fetch the recruit info of the project
//  * @param {string} orgId The id of the chosen organization
//  * @param {string} projectId The id of the chosen project
//  * @returns {function} An async function to call the database and dispatch the data to global store
//  */
// export function _getProjectInfo(orgId, projectId) {

//  	 return async (dispatch, getState) => {
// 		console.log("Fetching project info is beginning with projectId: ", projectId);
// 		let count = 0;
// 		let projectData = {
// 			projectInfo: {},
// 			projectDetail: {},
// 			projectProgress: [],
// 			formSubmission:[]
// 		};
// 		try {

// 			// Basic info of the project
// 			await firebase_db
// 				.collection("public-projects")
// 				.doc(projectId)
// 				.get()
// 				.then(function (doc) {
// 					projectData.projectInfo = doc.data();
// 					console.log("Document data - Info:", projectData.projectInfo);
// 				});

// 			//Project Recruit Info
// 			await firebase_db
// 				.collection("public-projects")
// 				.doc(projectId)
// 				.collection("recruit-info")
// 				.doc(projectId)
// 				.get()
// 				.then(function (doc) {
// 					projectData.projectDetail = doc.data();
// 					if (projectData.projectDetail == undefined){
// 						projectData.projectDetail = {
// 							benefits: [],
// 							requirements: [],
// 							questions: [],
// 						};
// 					}
// 					console.log("Document data - Details:", projectData.projectDetail);
// 				});

// 			//Project Progress
// 			await firebase_db
// 				.collection("public-projects")
// 				.doc(projectId)
// 				.collection("recruit-info")
// 				.doc(projectId)
// 				.collection("progress")
// 				.get()
// 				.then(function (querySnapshot) {
// 					querySnapshot.forEach(function (doc) {
// 						projectData.projectProgress[count] = doc.data();
// 						count++;
// 					});
// 					console.log("Document data - progress:", projectData.projectProgress);
// 				});
				
// 			// Form submission
// 			await 
// 			firebase_db
// 			.collection('organization')
// 			.doc(`${orgId}`)
// 			.collection('projects')
// 			.doc(`${projectId}`)
// 			.collection('formSubmission')
// 			.get()
// 			.then((query) =>{
// 				console.log('query.docs(): ', query.docs);
// 				let tmpDoc;
				
// 				query.forEach((doc) => {
// 					console.log('doc of form submission', doc);
// 					projectData.formSubmission.push(doc.data())
// 					tmpDoc = doc;
// 				})
// 				console.log('added form submission data with doc', tmpDoc)
// 			})
		
// 			console.log('formSubmission',projectData.formSubmission)

// 			dispatch({
// 				type: SET_PROJECT_RECRUIT_INFO,
// 				payload: projectData,
// 			});

// 			// Analytics
// 			analytics.logEvent('page_view', {
// 				page_location: 'ProjectInfoPage',
// 				page_title: 'ProjectInfoPage',
// 				page_path: `/projectInfoPage/${projectId}`,
// 				category: `${projectData.projectInfo.category}`
// 			});
		

// 		} catch (error) {
// 			console.log("error", error);
// 		}
// 	}
  
// }

// /************Push Data**************/
// //Export the actions.
// export const UP_DATA_FORM = "UP_DATA_FORM";

// /**
//  * @summary Send the profile data the PPU want to create to firestore
//  * @param {string} FormState
//  */
// export const upDataForm = (FormState) => {
//   /**
//    * @summary Asynchronous function calling the database to push the data
//    * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
//    * @returns {void}
//    * @author TrNgTien
//    */
//   return async (dispatch) => {
//     try {
//       await firebase_db
//         .collection("organization")
//         .doc(`${testing_organization_id}`)
//         .collection("projects")
//         .doc(`${testing_submission_form}`)
//         .collection("formSubmission")
//         .doc()
//         .set(
//           {
//             FormState,
//           },
//           { merge: true }
//         );
//       console.log("Submit form successfully");

//       dispatch({
//         type: UP_DATA_FORM,
//         upDataForm: {
//           FormState,
//         },
//       });
//     } catch (error) {
//       console.log("Error::", error);
//     }
//   };
// };
