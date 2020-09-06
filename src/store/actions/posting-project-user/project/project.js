// Firebase database
import {firebase_db} from '../../../../firebase-config'

// Constants
import {testing_project_id} from '../../../../constants/testing-keys'

// Export the actions
export const SET_PROJECT = "SET_PROJECT";

/******************************** ACTIONS ********************************/

// Fetch the details of the project (recruit-info)
export const fetchProject_recruitInfo_ppu = () => {
    
    return async (dispatch, getState) => {
        let projectData;
        try {
            // Retrieve the data from Firestore Cloud database
            await 
            firebase_db
            .collection('public-projects')
            .doc(`${testing_project_id}`)
            .get()
            .then(documentSnapshot => projectData = documentSnapshot.data())

            console.log('project data', projectData);

            // dispatch helps us store the changed state/ data into the reducers
            dispatch({
                type: SET_PROJECT,
                projectData: projectData
            })

        } catch (error) {
            console.log('error', error)
        }
    }
}

