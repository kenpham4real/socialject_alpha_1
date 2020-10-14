// Firebase database
import { FETCH_LANDING } from "../../../actions/searching-project-user/landing/landingAction";
import {UP_DATA_FORM } from "../../../actions/searching-project-user/project/project";

//Initial state:
const initialState = {
  projectData: [],
  upDataForm:[],
};

/******************************** REDUCER ********************************/
//Save the data onto global store
export const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANDING:
      // console.log("Project array payload: ", action.payload);
      return {
        ...state,
        projectData: action.payload,
      };
    default:
      return {
        projectData: undefined,
      };
  }
};


//Save the data of the Application Form to global store
export const upDataFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case UP_DATA_FORM:
        // console.log("Project array payload: ", action.upDataForm);
        return {
          ...state,
          projectData: action.upDataForm,
        };
      default: return state;
    }
  };