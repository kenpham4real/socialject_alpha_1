import {
    SET_PROJECT_RECRUIT_INFO,
    SET_PROJECT_BASIC_INFO
} from '../../../actions/posting-project-user/project/project'

const initialState = {
    projects_basic_info: [],
    projects_recruit_info: {
        benefits: [],
        requirements: []
    }
};

export const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PROJECT_BASIC_INFO:
            return{
                ...state,
                projects_basic_info: state.projects_basic_info.concat(action.projectData)
            }
        case SET_PROJECT_RECRUIT_INFO:
            return{
                ...state,
                projects_recruit_info: {
                    benefits: action.benefits,
                    requirements: action.requirements
                }
            }
        default: return state;
    }
}