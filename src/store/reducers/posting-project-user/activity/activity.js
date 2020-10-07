
// ACTION TYPES
import {
    ADD_ACTIVITY, 
    SET_ACTIVITY
} from '../../../actions/posting-project-user/activity/activity'

// Classes and models
import { Activity } from '../../../../models/activity';

// Initial state
const initialState = {
    activities: [],
};

/**
 * @summary Handling the data sent from actions
 * @param {object} state 
 * @param {object} action
 * @returns {object} new state
 * @author Ken Pham
 */
export const activityReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIVITY:
            return{
                ...state,
                activities: state.activities.concat(action.activityData)
            }
        case ADD_ACTIVITY:
            const activity = new Activity(
                action.activityInfo.activityId,
                action.activityInfo.activityName,
                action.activityInfo.activityDescription,
                action.activityInfo.activityLocation,
                action.activityInfo.activityDate,
            )
            return{
                ...state,
                activities: state.activities.concat(activity)
            }
        default: return state;
    }
}