// Action types
import {
  SET_PROJECT_RECRUIT_INFO,
  SET_PROJECT_BASIC_INFO,
  GET_FORM_SUBMISSION
} from "../../../actions/posting-project-user/project/project";

// Initialize the state
const initialState = {
  projects_basic_info: [],
  projects_recruit_info: {
    benefits: [],
    requirements: []
  },
  formSubmission: []
};
/**
 * @summary Handle the states of the projects (initialState above)
 * @param {object} state
 * @param {object} action
 * @returns {object} new state
 * @author Ken Pham
 */
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_BASIC_INFO:
      return{
        ...state,
        projects_basic_info: state.projects_basic_info.concat(action.projectData)
      }
    case SET_PROJECT_RECRUIT_INFO:
      // console.log('action.benefits', action.benefits)
      return{
        ...state,
        projects_recruit_info: {
          benefits: action.benefits,
          requirements: action.requirements
        }
      }
    case GET_FORM_SUBMISSION:
      return{
        ...state,
        formSubmission: action.formSubmission
      }
    default:
      return state;
  }
};
