// Firebase database
import {firebase_db,  analytics} from '../../../../firebase-config';
// import {firebase_storage} from '../../../../firebase-config';


// Constants
import {testing_project_id} from '../../../../constants/testing-keys';
// import {testing_activity_id} from '../../../../constants/testing-keys';

// Classes and models
// import {Activity} from '../../../../models/activity'

// Helper
import {_imageUploadHandler} from '../../../../helper/image/imageHandler'

// Export all the action types
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const SET_ACTIVITY = "SET_ACTIVITY";

/******************************** ACTIONS ********************************/


export const _fetchProjectActivity_ppu = () => {

    return async (dispatch, getState) => {
        let activityData = [];
        // // console.log('Fetching data of project activities')
        try {
            await
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
            
            // // console.log('activity data', activityData)

            dispatch({
                type: SET_ACTIVITY,
                activityData: activityData
            })
    
        } catch (error) {
            // // console.log('error', error)
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
export const _addActivity_ppu = (projectId, activityId, activityName, activityDescription, activityLocation, activityDate, activityImage) => {

    /**
     * @summary Asynchronous function calling the database to push the data
     * @param {function} dispatch => Function used to send the action type and data to the Redux reducer
     * @param {function} getState => Function used to access the current state of the application
     * @returns {void}
     * @author Ken Pham
     */
    return async (dispatch, getState) => {

        // const user = getState().autoLoginReducer.userData;
        const activityImageUrl = await _imageUploadHandler(activityImage);

        // // console.log('user in add activity', user)

        try {
            await
            firebase_db
            .collection("public-projects")
            .doc(`${projectId}`)
            .collection('recruit-info')
            .doc(`${projectId}`)
            .collection('progress')
            .doc(`${activityId}`)
            .set({
                activityId: activityId,
                activityName: activityName,
                activityDescription: activityDescription,
                activityLocation: activityLocation,
                activityDate: activityDate,
                activityImage: activityImageUrl
            },
            {
                merge: true,
            }
            )

            // // console.log('Add activities successfully');

            dispatch({
                type: ADD_ACTIVITY,
                activityInfo: {
                    activityId: activityId,
                    activityName: activityName,
                    activityDescription: activityDescription,
                    activityLocation: activityLocation,
                    activityDate: activityDate,
                    activityImage: activityImageUrl
                }
            })

            analytics.logEvent('page_view', {
                page_location: 'AddActivity',
                page_path: '/addActivity',
                page_title: 'AddActivity'
            });

            analytics.logEvent('select_item', {
                items: ['Add activity button']
            });
            
            
        } catch (error) {
            // // console.log('Error', error);
        }
    }
}