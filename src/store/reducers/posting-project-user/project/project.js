// Action types
import {
  SET_PROJECT,
} from "../../../actions/posting-project-user/project/project";
    SET_PROJECT_RECRUIT_INFO,
    SET_PROJECT_BASIC_INFO
} from '../../../actions/posting-project-user/project/project'

// Initialize the state
const initialState = {
  projects: [],
  postData: {
    name: null,
    description: null,
    location: null,
    deadline: null,
    question: null,
    benefit: [],
    requirement: [],
    avatar: null,
    }
    
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
    case SET_PROJECT:
      return {
        ...state,
        projects: action.projectData,
      };
    case "ADD_NAME":
      console.log("Name dispatched.");
      return {
        ...state,
        postData: {
            name: action.payload,
        }
      };
    case "ADD_DESCRIPTION":
      console.log("Description dispatched.");
      return {
        ...state,
        postData: {
            description: action.payload,
        }
        
      };
    case "ADD_LOCATION":
      console.log("Location dispatched.");
      return {
        ...state,
        postData: {
            location: action.payload,
        }
       
      };
    case "ADD_DEADLINE":
      console.log("Deadline dispatched.");
      return {
        ...state,
        postData: {
            deadline: action.payload,
        }
      };
    /* For later use. Haven't finished this :))))
    case ADD_QUESTION:
      return {
        ...state,
        question: action.payload,
      };
    case ADD_BENEFIT:
      return {
        ...state,
        benefit: action.payload,
      };
    case ADD_REQUIREMENT:
      return {
        ...state,
        requirement: action.payload,
      };
    case ADD_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
      */
    default:
      return state;
  }
};
