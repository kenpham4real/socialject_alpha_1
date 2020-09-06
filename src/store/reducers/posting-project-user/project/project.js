import {
    SET_PROJECT
} from '../../../actions/posting-project-user/project/project'

const initialState = {
    projects: [],
};

export const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PROJECT:
            return{
                ...state,
                projects: action.projectData
            }
        default: return state;
    }
}