/**
 * Contributor:Tien,Long
 *  Day:
 *    (+) Tien 20/9/2020
 *
 *
 *    (+) Long 22 Sept
 * 
 * 	  (+) Ken Oct 3rd
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
// import {
//   testing_organization_id,
//   testing_submission_form,
// } from "../../../../constants/testing-keys";

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
export const SET_PROJECT_RECRUIT_INFO = "SET_PROJECT_RECRUIT_INFO";

/**
 * @summary Fetch the recruit info of the project
 * @param {string} orgId The id of the chosen organization
 * @param {string} projectId The id of the chosen project
 * @returns {function} An async function to call the database and dispatch the data to global store
 */
export function _getProjectInfo(orgId, projectId) {

 	 return async (dispatch, getState) => {
		// console.log("Fetching project info is beginning with projectId: ", projectId, "and orgId", orgId);
		let count = 0;
		let projectData = {
			projectInfo: {},
			projectDetail: {},
			projectProgress: [],
			formSubmission:[]
		};
		try {

			// Basic info of the project
			await firebase_db
				.collection("public-projects")
				.doc(projectId)
				.get()
				.then(function (doc) {
					projectData.projectInfo = doc.data();
					// console.log("Document data - Info:", projectData.projectInfo);
				});

			//Project Recruit Info
			await firebase_db
				.collection("public-projects")
				.doc(projectId)
				.collection("recruit-info")
				.doc(projectId)
				.get()
				.then(function (doc) {
					projectData.projectDetail = doc.data();
					if (projectData.projectDetail === undefined){
						projectData.projectDetail = {
							benefits: [],
							requirements: [],
							questions: [],
						};
					}
					// console.log("Document data - Details:", projectData.projectDetail);
				});

			//Project Progress
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
					// console.log("Document data - progress:", projectData.projectProgress);
				});
				
			// Form submission
			await 
			firebase_db
			.collection('organization')
			.doc(`${orgId}`)
			.collection('projects')
			.doc(`${projectId}`)
			.collection('formSubmission')
			.get()
			.then((query) =>{
				// console.log('query: ', query);
				let tmpDoc;
				
				query.forEach((doc) => {
					// console.log('doc of form submission', doc);
					projectData.formSubmission.push(doc.data())
					tmpDoc = doc;
				})
				// console.log('added form submission data with doc', tmpDoc)
			})
		
			// console.log('formSubmission',projectData.formSubmission)

			dispatch({
				type: SET_PROJECT_RECRUIT_INFO,
				payload: projectData,
			});

			// Analytics
			analytics.logEvent('page_view', {
				page_location: 'ProjectInfoPage',
				page_title: 'ProjectInfoPage',
				page_path: `/projectInfoPage/${projectId}`,
				category: `${projectData.projectInfo.category}`
			});
		

		} catch (error) {
			// console.log("error", error);
		}
	}
  
}
