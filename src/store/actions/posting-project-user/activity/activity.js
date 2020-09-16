// Firebase database
import {firebase_db, firebase_storage} from '../../../../firebase-config'

// Constants
import {testing_project_id, testing_activity_id} from '../../../../constants/testing-keys'

// Classes and models
import {Activity} from '../../../../models/activity'

// Export all the action types
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const SET_ACTIVITY = "SET_ACTIVITY";

/******************************** ACTIONS ********************************/


export const _fetchProjectActivity_ppu = () => {

    return async (dispatch, getState) => {
        let activityData = []
        try {
            const something = await
            firebase_db
            .collection('public-projects')
            .doc(`${testing_project_id}`)
            .collection('recruit-info')
            .doc(`${testing_project_id}`)
            .collection('progress')
            .get()
            .then(
                querySnapshot => {
                    querySnapshot.forEach(
                        (doc) => {
                            activityData.push(doc.data())
                        }
                    )
                }
            )
            
            console.log('activity data', activityData)

            dispatch({
                type: SET_ACTIVITY,
                activityData: activityData
            })
    
        } catch (error) {
            console.log('error', error)
        }
    }
}

/**
 * @summary Add an activity to the progress board of the project for PPU
 * @param {string} activityId
 * @param {string} activityName 
 * @param {string} activityDescription 
 * @param {string} activityLocation 
 * @param {string} activityDate 
 * @returns @async @function
 * @author Ken Pham
 */
export const _addActivity_ppu = (activityId, activityName, activityDescription, activityLocation, activityDate, activityImage) => {

    /**
     * @summary Asynchronous function calling the database to push the data
     * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
     * @param {function} getState => Function used to access the current state of the application
     * @returns {void}
     * @author Ken Pham
     */
    return async (dispatch, getState) => {
        try {
            await
            firebase_db
            .collection('public-projects')
            .doc(`${testing_project_id}`)
            .collection('recruit-info')
            .doc(`${testing_project_id}`)
            .collection('progress')
            .doc(`${activityId}`)
            .set({
                activityId: activityId,
                activityName: activityName,
                activityDescription: activityDescription,
                activityLocation: activityLocation,
                activityDate: activityDate,
            })

            console.log('Add activities successfully');

            dispatch({
                type: ADD_ACTIVITY,
                activityInfo: {
                    activityId: activityId,
                    activityName: activityName,
                    activityDescription: activityDescription,
                    activityLocation: activityLocation,
                    activityDate: activityDate,
                }
            })
            
        } catch (error) {
            console.log('Error', error);
        }
    }
}