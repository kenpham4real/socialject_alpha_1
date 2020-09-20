// Action types
import {
  SET_PROJECT_RECRUIT_INFO,
  SET_PROJECT_BASIC_INFO
} from "../../../actions/posting-project-user/project/project";

// Initialize the state
const initialState = {
<<<<<<< HEAD
=======

>>>>>>> 0e0fef4a504ebf33f7e6a5fac8370cf05b87b644
  projects_basic_info: [],
  projects_recruit_info: {
    benefits: [],
    requirements: []
  }
<<<<<<< HEAD
    
=======
>>>>>>> 0e0fef4a504ebf33f7e6a5fac8370cf05b87b644
};
/**
 * @summary Handle the states of the projects (initialState above)
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state
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
      console.log('action.benefits', action.benefits)
      return{
        ...state,
        projects_recruit_info: {
          benefits: action.benefits,
          requirements: action.requirements
        }
      }
    default:
      return state;
  }
};
