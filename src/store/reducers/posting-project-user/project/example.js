// Import stuff like actions and models
import {ADD_PROJECT} from '../../../actions/posting-project-user/example';

// Initialize the initial state
const initialState = {
    projects: [],
    availableProjects: [],
    // ...
}

// Export the reducer

export const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PROJECT:
            // add projects
        default: return state;
    }
}